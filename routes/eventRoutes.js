const express = require('express');
const eventController = require('../controllers/eventController');
const auth = require('../middlewares/auth');
const router = express.Router();
router.get('/', eventController.getEvents);
router.post('/', auth('admin'), eventController.createEvent);
router.put('/:id', auth('admin'), eventController.updateEvent);
router.delete('/:id', auth('admin'), eventController.deleteEvent);
module.exports = router;
