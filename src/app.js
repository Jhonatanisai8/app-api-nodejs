const express = require("express");
const config = require("./config");
const app = express();
const clientes = require("./modules/clientes/rutas.js");

// configuracion
app.set("port", config.app.port);

//rutas
app.use("/api/clientes", clientes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
