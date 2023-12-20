const express = require("express");

const PORT = process.env.PORT ?? 3007;

const app = express(); //con esto iniciamos el framework de express. todo lo que usemos con 'app.' serán funciones de Express

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  console.log("request received");
  res.send("Hola, Darío");
});

app.listen(PORT, () => {
  console.log(`Servidor en activo en el puerto http://localhost:${PORT}`);
});
