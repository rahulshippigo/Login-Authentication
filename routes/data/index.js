const router = require('express').Router();

const Tokenverification = require('../user/Tokenverification');

router.use(Tokenverification);

router.post('/add', require('./add'));

router.get('/old', require('./old').all);

router.get('/old/:id', require('./old').single);

module.exports = router;