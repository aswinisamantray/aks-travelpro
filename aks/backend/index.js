import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI=process.env.DB_URL;



    mongoose
    .connect(mongoURI,{
      useNewUrlParser: true,
      useUnifiedTopology: true  })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

const userSchema = new mongoose.Schema({
  name:{type: String, required: true, unique: true},
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);


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

    res.status(201).json({ message: 'User created successfully' });
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
    if (!user) {
      return res.status(401).json({ message: 'Invalid name' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid+","+user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
     res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT || 5000}`);
});
