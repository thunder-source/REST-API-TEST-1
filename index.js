const express = require("express");
const coursesRouter = require("./routes/courses");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://praditya:1x3hAjbiTWoZLb8H@cluster0.f9euvie.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("connected to the mongo db");
  }
);

app.use("/api", coursesRouter);

app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(port, () => {
  console.log("server is running on port 8000");
});
