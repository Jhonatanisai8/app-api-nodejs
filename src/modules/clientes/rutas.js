const express = require("express");
const router = express.Router();
const respuesta = require("../../red/responses");
const controller = require("./controller.js");
router.get("/", (req, res) => {
  const todos = controller.todos();
  respuesta.sucess(req, res, todos, 200);
});

module.exports = router;
