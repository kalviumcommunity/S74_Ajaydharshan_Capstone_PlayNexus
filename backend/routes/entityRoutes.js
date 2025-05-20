const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// GET all entities
router.get('/', async (req, res) => {
  try {
    const entities = await Entity.find(); // Retrieve all documents from the Entity collection
    res.json(entities); // Send the result as JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors
  }
});


// POST a new entity
router.post('/add', async (req, res) => {
  const { type, name, description, imageUrl, location } = req.body;

  const newEntity = new Entity({
    type,
    name,
    description,
    imageUrl,
    location
  });

  try {
    const savedEntity = await newEntity.save();
    res.status(201).json(savedEntity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) an entity by ID
router.put('/update/:id', async (req, res) => {
  const { type, name, description, imageUrl, location } = req.body ;

  try {
    const updatedEntity = await Entity.findByIdAndUpdate(
      req.params.id,
      { type, name, description, imageUrl, location },
      { new: true }
    );

    if (!updatedEntity) {
      return res.status(404).json({ message: 'Entity not found' });
    }

    res.json(updatedEntity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}) ;

module.exports = router;



