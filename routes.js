const express = require("express");

const {
  fetchDevelopers,
  addDeveloper,
} = require("./controllers/DevelopersController");
const {
  checkdev,
  generateToken,
} = require("./tokenManagement/TokenManagement");

const dcxRoute = express.Router();

dcxRoute.get("/developers", checkdev, fetchDevelopers);

dcxRoute.post("/login", (req, res) => {
  const { name, password } = req.body;
  let token = generateToken({ name, password });
  console.log("TOKEN-->", token);
  if (name === "1" && password === "1") {
    return res.status(200).send({ token, name, password });
  }
  res.end();
});

dcxRoute.post("/developers", addDeveloper);
module.exports = dcxRoute;
