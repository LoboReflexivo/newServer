const express = require("express");

const app = express(); //Con esto creamo el objeto de nuestra aplicación

const PORT = 3007;

app.get("/", (req, res) => {
  res.send("¡Hola, Darío!");
});

app.listen(PORT, () => {
  console.log(`Servidor en activo en el puerto ${PORT}`);
});
