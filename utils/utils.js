//Esto para hacer una función para generar el token.

//importamos JSON Web Token //
const jwt = require("jsonwebtoken");

const generateToken = (user, isRefreshToken) => {
  if (isRefreshToken) {
    return jwt.sign(user, process.env.TOKEN_SECRET_REFRESH, {
      expiresIn: "90min",
    });
  }
  return jwt.sign(user, process.env.TOKEN_SECRET, {
    expiresIn: "20min",
  });
};

module.exports = { generateToken };
