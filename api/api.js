import Hapi from 'hapi';

// Create a server with a host and port
let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/ping',
    handler: function (request, reply) {
       reply({response: 'pong'});
    }
});

// Export server here instead of starting it (for testing purposes.)

export default server;
