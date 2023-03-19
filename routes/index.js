const express = require('express');
const Excuses = require('../apps/excuses/routes')

const router = express.Router();

Excuses.routes(router);

module.exports = router;