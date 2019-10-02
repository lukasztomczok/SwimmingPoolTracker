var bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: 'SwimmingPoolTracker-API',
  streams: [{
    path: `${process.cwd()}/SwimmingPoolTracker-API.log`,
  }]
});

module.exports = log;