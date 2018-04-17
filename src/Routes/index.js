const simpleGetRequest = require('./getRequest');
const readParam = require('./readParam');
const readQuery = require('./readQuery');
const simplePostRequest = require('./postRequest');

// require all the request files and export them in an array
module.exports = [].concat(simpleGetRequest, readParam, readQuery, simplePostRequest);
