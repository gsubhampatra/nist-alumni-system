const ApiResponse = (res, statusCode = 200, message = "Success", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const ApiError = (
  res,
  statusCode = 500,
  message = "An error occurred",
  error = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.toString() : null,
  });
};

export { ApiResponse, ApiError };
