const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

const bcrypt = require('bcrypt');
const saltRounds = 12; // you can adjust this value as needed

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: encryptedPassword });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'User Doesnt Exist' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    const token = jwt.sign({ username: username, password: password }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    createUser,
    login
}