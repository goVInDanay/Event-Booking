const Event = require('../models/Event');
async function createEvent(req, res) {
    try{
        const event = await Event.create(req.body);
        res.status(201).json(event);
    }
    catch(error){
        res.status(400).send('Event creation failed');
    }
}
async function updateEvent(req, res) {
    try{
        const event = await Event.findByPk(req.params.id);
        if(!event){
            return res.status(404).send('Event not found');
        }
        await event.update(req.body);
        res.json(event);
    }
    catch(error){
        res.status(400).send('Update failed');
    }
}
async function deleteEvent(req, res) {
  try{
    const event = await Event.findByPk(req.params.id)
    if (!event){
        return res.status(404).send('Event not found');
    }
    await event.destroy();
    res.send('Event deleted');
  }
  catch(error) {
    res.status(500).send('Delete failed');
  }
}
async function getEvents(req, res) {
  try {
    const events = await Event.findAll();
    res.json(events);
  }
  catch(error){
    res.status(500).send('Failed to fetch events');
  }
}
module.exports={createEvent, updateEvent, deleteEvent, getEvents};