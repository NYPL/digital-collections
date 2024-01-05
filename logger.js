const winston = require("winston");

// Most basic winston setup
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs" }),
  ],
});

module.exports = logger;
