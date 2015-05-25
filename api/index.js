require('babel/register');
var api = require('./api.js');

api.start(function () {
    console.log('Server running at:', api.info.uri);
});
