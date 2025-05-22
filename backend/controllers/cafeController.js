const cafe = require('../models/cafe');

exports.getAllCafes = async (req, res) => {
  const cafes = await Cafe.find();
  res.json(cafes);
};

exports.getCafeById = async (req, res) => {
  const cafe = await Cafe.findById(req.params.id);
  if (cafe) res.json(cafe);
  else res.status(404).json({ message: 'Cafe not found' });
};

exports.createCafe = async (req, res) => {
  const cafe = await Cafe.create(req.body);
  res.status(201).json(cafe);
};
