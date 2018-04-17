module.exports = [
  {
    method: 'GET',
    path: '/read/{id}',
    handler: (request, reply) => {
      reply(`Url had ${request.params.id}`);
    },
  }];
