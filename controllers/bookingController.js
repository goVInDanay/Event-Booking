const Booking = require('../models/Booking')
const Event = require('../models/Event')
async function bookEvent(req, res){
  try{
    const event = await Event.findByPk(req.body.eventId);
    if(!event){
        return res.status(404).send('Event not found');
    }
    if(event.availableSeats <= 0){
      return res.status(400).send('No available seats');
    }
    await Booking.create({ userId: req.user.id, eventId: event.id });
    await event.decrement('availableSeats');
    res.status(201).send('Booking successful');
  }
  catch(error){
    res.status(500).send('Booking failed');
  }
}
async function getBookings(req, res){
  try {
    const bookings = await Booking.findAll({
      where: {userId: req.user.id},
      include: ['Event']
    });
    res.json(bookings);
  }
  catch(error){
    res.status(500).send('Could not fetch bookings');
  }
}

async function cancelBooking(req, res){
  try{
    const booking = await Booking.findOne({
        where: { id: req.params.id, userId: req.user.id }
    });
    if(!booking){
        return res.status(404).send('Booking not found');
    }
    const event = await Event.findByPk(booking.eventId);
    await booking.destroy();
    await event.increment('availableSeats');
    res.send('Booking cancelled');
  }
  catch(error){
    res.status(500).send('Cancellation failed');
  }
}

module.exports = {bookEvent, getBookings, cancelBooking};
