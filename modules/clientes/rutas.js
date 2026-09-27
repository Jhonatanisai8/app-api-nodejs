const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola desde modulo de clientes!");
});

module.exports = router;
