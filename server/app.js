/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.set("Access-Control-Allow-Headers", "Authorization");
  next();
});

app.use(blogRoutes);

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("App is listening on port 3000...");
});
