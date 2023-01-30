const devModel = require("../models/DevelopersSchema");

const fetchAllDevelopers = async () => {
  let data = await devModel
    .find({})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

const addDev = async (dev) => {
  const data = await dev
    .save()
    .then((result) => {
      console.log("result", result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

module.exports = { fetchAllDevelopers, addDev };
