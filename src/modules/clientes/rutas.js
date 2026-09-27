const express = require("express");
const router = express.Router();
const respuesta = require("../../red/responses");
router.get("/", (req, res) => {
  respuesta.sucess(req, res, "Hola desde modulo de clientes OK!", 200);
});

module.exports = router;
