const express = require("express");

const {
  fetchDevelopers,
  addDeveloper,
} = require("./controllers/DevelopersController");
const { checkdev } = require("./tokenManagement/TokenManagement");

const dcxRoute = express.Router();

dcxRoute.get("/developers", checkdev, fetchDevelopers);
// dcxRoute.get("/developers", fetchDevelopers);

dcxRoute.post("/developers", addDeveloper);
module.exports = dcxRoute;
