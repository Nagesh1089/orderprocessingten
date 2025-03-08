exports.handleError = (
  res,
  error,
  message = "Internal Server Error",
  statusCode = 500
) => {
  console.error(error);
  res.status(statusCode).json({ message });
};
