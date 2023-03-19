const Handlers = require('./handlers');

const routes = (router) => {
    router.get('/excuses/:id', Handlers.getOneExcusesByID);
    router.get('/excuses/', Handlers.getAllExcuses);
    router.post('/excuses', Handlers.postNewExcuse);
};

module.exports.routes = routes;