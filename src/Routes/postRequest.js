module.exports = [
  {
    method: 'POST',
    path: '/api',
    handler: (request, reply) => {
      reply(`Request has ${request.payload.id} in payload as id`);
    },
  }];
