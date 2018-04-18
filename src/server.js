const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080), // set the port number at which you want to run the server
});

function handleFunction(request, reply) {
  reply('pong');
}

server.route({ path: '/ping', method: 'GET', handler: handleFunction });

server.start(() => {
  console.log(`Server running at: ${server.info.uri}`);
});
