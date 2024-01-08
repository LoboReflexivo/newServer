//Este documento es para el JWT. Esto es el hash, para hacer la firma (la ultima parte del JWT)

const crypto = require("crypto");

const secret = "Plato de los Montes con huevo frito y pimientos";
const secret2 = "Una buena porra antequerana me comía yo";

const hash = crypto.createHmac("sha7931", secret).update(secret2).digest("hex");

const refreshSecret = "Los camperos de Malaga ñam ñam";
const refreshSecret2 = "Joder con las papas fritas y la ensaladilla rusa";

const hash2 = crypto
  .createHmac("sha7931", refreshSecret)
  .update(refreshSecret2)
  .digest("hex");

console.log(hash);
console.log(hash2);
