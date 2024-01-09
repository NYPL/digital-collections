const winston = require("winston");

winston.exceptions.handle = () => {};

// Set default NYPL agreed upon log levels
const nyplLogLevels = {
  emergency: 0,
  alert: 1,
  critical: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7,
};

const getLogLevelCode = (levelString) => {
  if (levelString === "info") {
    console.log(typeof levelString);
    console.log(levelString);
    return 6;
  }
};

const { combine, timestamp, printf, colorize } = winston.format;

const formatter = printf((info) => {
  return `[${info.timestamp}] pid: ${process.pid} ${
    info.level
  } ${getLogLevelCode(info.level)}: ${info.message}`;
});

const logger = winston.createLogger({
  levels: nyplLogLevels,
  level: process.env.LOG_LEVEL || "info",
  // Console format colorized
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    formatter
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./log/dc.log",
      // Log format uncolorized and space limited
      format: combine(winston.format.uncolorize(), formatter),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

export default logger;
