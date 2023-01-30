const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Developer = new Schema({
  _id: String,
  state: String,
  city: String,
  name: String,
  skills: String,
});

module.exports = mongoose.model("Developer", Developer);

// id, Title, Author, Publisher, Date of Publish, Price, ISBN Number
