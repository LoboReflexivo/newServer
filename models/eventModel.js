const mongoose = require("mongoose");

//metemos la función de hacer esquemas de mongoose en una variable para usarlo mas comodo
const Schema = mongoose.Schema;

//Aqui se crea el esquema que tendrá la colección de la base de datos
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const eventModel = mongoose.model("event", eventSchema, "events");

module.exports = eventModel;
