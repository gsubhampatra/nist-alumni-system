const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Log the error stack for debugging
    ApiError(res, err.status || 500, err.message || 'Internal Server Error');
  };

export default errorHandler;