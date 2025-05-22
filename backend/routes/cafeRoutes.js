const express = require('express');
const router = express.Router();
const { getAllCafes, getCafeById, createCafe } = require('../controllers/cafeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllCafes);
router.get('/:id', getCafeById);
router.post('/', protect, createCafe);

module.exports = router;
