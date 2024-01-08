const mongoose = require("mongoose");

//metemos la función de hacer esquemas de mongoose en una variable para usarlo mas comodo
const Schema = mongoose.Schema;

//Aqui se crea el esquema que tendrá la colección de la base de datos
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Correo incorrecto"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("user", userSchema, "users");

module.exports = userModel;
