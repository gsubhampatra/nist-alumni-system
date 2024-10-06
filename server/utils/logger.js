import * as winston from "winston";

// Create logger instance
const logger = winston.createLogger({
  level: "info", // Default log level, you can adjust it as needed (error, warn, info, verbose, debug, silly)
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      handleExceptions: true,
    }),
    new winston.transports.File({
      filename: "././logs/error.log",
      level: "error",
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: "././logs/app.log",
      level: "info",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
  exitOnError: false, // Do not exit on handled exceptions
});

// Custom logger function for easier use throughout the app
const log = {
  info: (message) => {
    logger.log("info", message);
  },
  error: (message) => {
    logger.log("error", message);
  },
  warn: (message) => {
    logger.log("warn", message);
  },
  debug: (message) => {
    logger.log("debug", message);
  },
};

export default log;
