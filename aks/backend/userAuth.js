import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from './models/User.js';
import Subscriber from './models/Subscriber.js';
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});

const app = express();
app.use(bodyParser.json());
app.use(cors());

const secretKey = uuidv4();

const mongoURI='mongodb+srv://ecoboy:ilumm98686@travel-planner-pro.wlffuj6.mongodb.net/travel-planner?retryWrites=true&w=majority';

    mongoose
    .connect(mongoURI,{
      useNewUrlParser: true,
      useUnifiedTopology: true  })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

// User sign-up
app.post('/signup', async (req, res) => {
  try {
    const {name, password, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(409).json({ message: 'name already exists' });
    }

    const exisitingMail=await User.findOne({email});
    if(exisitingMail){
      return res.status(409).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser=new User({name:name,password:hashedPassword,email:email});
    await newuser.save();

    res.status(201).json({ message: 'User created successfully' ,name});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User log-in
app.post('/login', async (req, res) => {
  try {
    const {name, password} = req.body;
    const user = await User.findOne({ name });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
     res.status(200).json({ message: 'Login successful' ,token,name});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/exelogin', async (req, res) => {
  try {
    const {name, password} = req.body;
    const user = await Subscriber.findOne({ name });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    if(token){
      res.cookie("jwttoken",token,{
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
      });
    }
    res.status(200).json({ message: 'Login successful' ,token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'You have access to this protected route!', userId: req.userId });
});

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

//subscribe-newsletter
app.post('/subscribe', async (req, res) => {
  try {
    const {email } = req.body;
    const exisitingMail=await Subscriber.findOne({email});
    if (exisitingMail) {
        return res.status(409).json({ message: 'Already subscribed' });
      }

    const newsub=new Subscriber({email:email});
    await newsub.save();

    res.status(201).json({ message: 'Thank You for subscribing!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT || 5000}`);
});
