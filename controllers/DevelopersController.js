const mongoose = require("mongoose");
const devModel = require("../models/DevelopersSchema");
const { fetchAllDevelopers, addDev } = require("../services/DeveloperServices");

const fetchDevelopers = async (req, res) => {
  const devs = await fetchAllDevelopers();

  return res.status(200).json({
    message: devs,
  });
};

const addDeveloper = async (req, res) => {
  let dev = new devModel({
    _id: new mongoose.Types.ObjectId(),
    state: req.body.state,
    city: req.body.city,
    name: req.body.name,
    skills: req.body.skills,
  });

  const resp = await addDev(dev);
  console.log("resp", resp);
  return res.status(200).json({ message: resp });
};

module.exports = { fetchDevelopers, addDeveloper };
