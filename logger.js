import winston from "winston";
// Supress error handling
winston.emitErrs = false;
// Set default NYPL agreed upon log levels
const nyplLogLevels = {
  levels: {
    emergency: 0,
    alert: 1,
    critical: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7,
  },
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

// const logLevel = (process.env.NODE_ENV === 'production') ? 'info' : 'debug';
const timestamp = () => new Date().toISOString();
const formatter = (options) => {
  const result = {
    timestamp: options.timestamp(),
    levelCode: getLogLevelCode(options.level),
    level: options.level.toUpperCase(),
  };

  if (process.pid) {
    result.pid = process.pid.toString();
  }

  if (options.message) {
    result.message = options.message;
  }

  if (options.meta && Object.keys(options.meta).length) {
    if (options.meta.holdRequestId) {
      result.holdRequestId = options.meta.holdRequestId;
      delete options.meta.holdRequestId;
    }

    if (options.meta && Object.keys(options.meta).length) {
      result.meta = JSON.stringify(options.meta);
    }
  }

  return JSON.stringify(result);
};

const loggerTransports = [
  new winston.transports.File({
    filename: "./log/discovery-ui.log",
    // winston should not attempt to catch and log uncaught exceptions when
    // running test suite, as that causes them to be hidden (and causes mocha
    // to return exit code 0, causing the test suite to appear as passed).
    handleExceptions: process.env.NODE_ENV !== "test",
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: false,
    timestamp,
    formatter,
  }),
];

// spewing logs while running tests is annoying
if (process.env.NODE_ENV !== "test") {
  loggerTransports.push(
    new winston.transports.Console({
      handleExceptions: true,
      json: false,
      stringify: true,
      colorize: true,
      timestamp,
      formatter,
    })
  );
}

const logger = new winston.Logger({
  levels: nyplLogLevels.levels,
  transports: loggerTransports,
  exitOnError: false,
});

export default logger;
