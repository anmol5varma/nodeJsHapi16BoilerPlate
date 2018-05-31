const Hapi = require('hapi');
const Routes = require('./Routes');

const server = new Hapi.Server();
server.connection({
  port: 3001,
  host: 'localhost',
});
server.route(Routes);
server.start(() => {
  console.log(`Server running at: ${server.info.uri}`);
});
