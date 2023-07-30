// import connectToMongo from './db'
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import bcrypt from 'bcrypt';
// import User from './User'

const express=require('express');
const connectToMongo=require('./db');
const cors=require('cors');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt');
const User=require('./User')

connectToMongo();
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

// User sign-up
app.post('/signup', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const exisitingMail=await User.findOne({email});
    if(exisitingMail){
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, email});
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User log-in
app.post('/login', async (req, res) => {
  try {
    const {username, password} = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
