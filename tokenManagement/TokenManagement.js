const jwt = require("jsonwebtoken");

const checkdev = (req, res, next) => {
  if (!req.header("Authorization"))
    return res.status(401).send({
      message: "developer not present",
    });

  let token = req.header("Authorization");
  jwt.verify(token, "secretCODE", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ message: "Token Expired!" });
    } else {
      console.log("tokenData-->", data);
    }
    next();
  });
};

const generateToken = (payload) => {
  console.log("payload", payload);
  return jwt.sign({ payload }, "secretCODE", { expiresIn: "10s" });
};

module.exports = { generateToken, checkdev };
