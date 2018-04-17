const simpleGetRequest = require('./ping');
const readParam = require('./readParam');

// require all the request files and export them in an array
module.exports = [].concat(simpleGetRequest, readParam);
