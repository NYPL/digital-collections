const winston = require("winston");
import path from "path";
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
  switch (levelString) {
    case "emergency":
      return 0;
    case "alert":
      return 1;
    case "critical":
      return 2;
    case "error":
      return 3;
    case "warning":
      return 4;
    case "notice":
      return 5;
    case "info":
      return 6;
    case "debug":
      return 7;
    default:
      return "n/a";
  }
};

const { combine, timestamp, printf } = winston.format;

const formatter = printf((info) => {
  const timestamp = new Date().toISOString();
  const logObject = {
    timestamp,
    pid: process.pid,
    level: info.level,
    levelCode: getLogLevelCode(info.level),
    message: info.message,
  };
  return JSON.stringify(logObject);
});

const logger = winston.createLogger({
  levels: nyplLogLevels,
  level: process.env.LOG_LEVEL || "info",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    formatter
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.resolve(process.cwd(), "log/dc.log"),
      // Log format space limited
      format: combine(winston.format.uncolorize(), formatter),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

export default logger;
