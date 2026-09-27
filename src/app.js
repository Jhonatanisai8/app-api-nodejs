const express = require("express");
const config = require("./config");
const app = express();

app.set("port", config.app.port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
