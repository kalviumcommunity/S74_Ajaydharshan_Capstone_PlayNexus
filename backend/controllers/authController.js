const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) =>{
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ token: generateToken(user._id) });
  } catch (err) {
    res.status(400).json({ message: 'User already exists' });
  } 
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};