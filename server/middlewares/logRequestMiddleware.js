import log from "../utils/logger.js";

const logRequest = (req, _, next) => {
  const userInfo = req.user ? ` - User: ${JSON.stringify(req.user)}` : "";
  const logMessage = `${req.method} ${req.originalUrl} ${userInfo}`;

  log.info(logMessage);

  next();
};

export default logRequest;
