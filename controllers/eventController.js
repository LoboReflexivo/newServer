//Importamos el esquema, el modelo del evento
const eventModel = require("../models/eventModel");

const addEvent = async (req, res) => {
  try {
    const { title, description, location, ticketPrice, attendees } = req.body;

    const newEvent = new eventModel({
      title,
      description,
      location,
      ticketPrice,
      attendees,
    });
    await newEvent.save();

    res.status(201).json({ status: "succeeded", newEvent, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { addEvent };
