const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllEvents);
router.post('/', protect, createEvent);

module.exports = router;