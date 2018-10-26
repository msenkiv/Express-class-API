
const express = require('express');
const server = express();


server.use(express.json({strict: false}));
server.use(express.query());

require('./starwars-apis/starwars.routes').attach(server);
const serverNumber = 3000;
server.listen(3001, function() {
    console.log('%s listening at %s',serverNumber);
});
module.exports = server;