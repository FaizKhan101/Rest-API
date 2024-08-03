const express = require("express");
const bodyPardser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyPardser.urlencoded()) // x-www-form-urlencoded <form>
app.use(bodyPardser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080, () => console.log("Server start at port: 8080"));
