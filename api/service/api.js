import Hapi from 'hapi';

// Create a server with a host and port
let server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 8000,
    routes: {
      cors: {
        origin: ['*']
      }
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/ping',
    handler: function (request, reply) {
      reply({response: 'pong'});
    }
});

// Export server here instead of starting it (for testing purposes.)

export default server;
