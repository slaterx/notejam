var winston = require('winston');
winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: './all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 50,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: false
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};