const express = require("express");

const bodyParser = require("body-parser");
const devRoutes = require("./routes");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", devRoutes);

mongoose
  .connect("mongodb://localhost:27017/DCXDeveloperDirectory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("server started on port 8080");
});
