const router = require('express').Router();

router.post('/login', require('./login'));

router.post('/signup', require('./signup'));

module.exports = router;