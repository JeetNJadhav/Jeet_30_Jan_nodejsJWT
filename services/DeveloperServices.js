const devModel = require("../models/DevelopersSchema");
const { generateToken } = require("../tokenManagement/TokenManagement");

const fetchAllDevelopers = async () => {
  let data = await devModel
    .find({})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  let token = generateToken(data);
  console.log("TOKEN-->", token);
  // returning data along with generated token
  return { token, data };
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
