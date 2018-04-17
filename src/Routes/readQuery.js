module.exports = [
  {
    method: 'GET',
    path: '/read',
    handler: (request, reply) => {
      reply(`Url had ${request.query.id} in query`);
    },
  }];
