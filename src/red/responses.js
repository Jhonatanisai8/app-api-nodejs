exports.sucess = function (req, res, mensaje, status) {
  const statusCode = status || 200;
  const message = mensaje || "";
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: message,
  });
};
exports.error = function (req, res, mensaje, status) {
  const statusCode = status || 500;
  const message = mensaje || "Error interno del servidor";
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: message,
  });
};
