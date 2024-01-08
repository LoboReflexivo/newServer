//Importamos el esquema, el modelo del usuario
const userModel = require("../models/userModel");
//importamos el bcrypt para encriptar las password
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const { name, lastName, email } = req.body;

    const newUser = new userModel({
      name: name,
      lastName: lastName,
      email: email,
      password: await bcrypt.hash(req.body.password, 10), //aqui encriptamos las password
    });
    await newUser.save();

    res.status(200).json({ status: "succeeded", newUser, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { addUser };
