const express = require("express"); //Importamo express
const mongoose = require("mongoose"); //importamos mongoose

const PORT = process.env.PORT ?? 3007; //Puerto en el que vamos a trabajar

const app = express(); //con esto iniciamos el framework de express. todo lo que usemos con 'app.' serán funciones de Express

app.use(express.json()); //Aqui hacemos que usemos el formato JSON en los archivos

//conexiones con el router
userRouter = require("./routes/userRouter");
eventRouter = require("./routes/eventRouter");

//rutas de los conexiones que están con el router

app.use("/users", userRouter);
app.use("/events", eventRouter);

//conexión con .env
require("dotenv").config();

//Conexión con Mongoose

const url_db = process.env.DB_event_user;

mongoose.connect(url_db);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error to conect data base ${error}`);
});

db.on("connected", () => {
  console.log(`Succecss connect`);
});

db.on("disconected", () => {
  console.log(`Mongo is disconected`);
});

//Donde express escucha al servidor y donde se activa
app.listen(PORT, () => {
  console.log(`Server activated on http://localhost:${PORT}`);
});
