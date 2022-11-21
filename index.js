const express = require("express");
const coursesRouter = require("./routes/courses");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("connected to the mongo db");
});

app.use("/api", coursesRouter);

app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(process.env.port, () => {
  console.log("server is running on port 8000");
});
