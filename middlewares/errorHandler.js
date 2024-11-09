function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  res.status(status).json({
    status,
    success: false,
    message: err.message || "Internal sever error",
  });
}

export default errorHandler;
