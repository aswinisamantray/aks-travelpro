import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
// import User from './User'
import mongoose from "mongoose";
// import connectToMongo from './db'

// const express=require('express');
// const connectToMongo=require('./db');
// const cors=require('cors');
// const bodyParser=require('body-parser');
// const bcrypt=require('bcrypt');
// const User=require('./User')

// connectToMongo();
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

const mongoURI="mongodb+srv://ecoboy:ilumm98686@travel-planner-pro.wlffuj6.mongodb.net/?retryWrites=true&w=majority"

    mongoose
    .connect(mongoURI)

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

const userSchema = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);


// User sign-up
app.post('/signup', async (req, res) => {
  try {
    const { password, email } = req.body;

    // Check if the user already exists
    // const existingUser = await User.findOne({ username });
    // if (existingUser) {
    //   return res.status(409).json({ message: 'Username already exists' });
    // }

    const exisitingMail=await User.findOne({email});
    if(exisitingMail){
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser=new User({password:hashedPassword,email:email});
    // const newUser = new User({ username, password: hashedPassword, email});
    await newuser.save();
    // await User.insertMany([newuser]);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User log-in
// app.post('/login', async (req, res) => {
//   try {
//     const {username, password} = req.body;

//     // Find the user in the database
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
