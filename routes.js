const express = require("express");

const {
  fetchDevelopers,
  addDeveloper,
} = require("./controllers/DevelopersController");

const dcxRoute = express.Router();

dcxRoute.get("/developers", fetchDevelopers);

dcxRoute.post("/developers", addDeveloper);
module.exports = dcxRoute;
