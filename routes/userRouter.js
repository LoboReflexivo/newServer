const { addUser } = require("../controllers/userController");

//importamos el modulo express y, a la vez cogemos al funcion Router, que nos proporciona hacer un enrutado
const router = require("express").Router();

router.post("/", addUser);

//Exportamos el enrrutado
module.exports = router;
