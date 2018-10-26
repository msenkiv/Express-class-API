const swController = require('./controllers/send.controller');

exports.attach = (server) => {
    server.get('/starwars/planets',swController.getPlanets);
};