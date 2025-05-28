const express = require('express');
const bookingController = require('../controllers/bookingController');
const auth = require('../middlewares/auth');
const router = express.Router();
router.post('/', auth(), bookingController.bookEvent);
router.get('/', auth(), bookingController.getBookings);
router.delete('/:id', auth(), bookingController.cancelBooking);
module.exports = router;
