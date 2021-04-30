const router = require('express').Router();

router.use('/user', require('./user'));

router.use('/data', require('./data'));

module.exports = router;