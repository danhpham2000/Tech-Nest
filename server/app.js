/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const { mongoose } = require("mongoose");
const app = express();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3kxqhkx.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(authRoutes);
app.use(blogRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT);
    console.log("Database connected!");
    console.log("App is listening on port ", process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
