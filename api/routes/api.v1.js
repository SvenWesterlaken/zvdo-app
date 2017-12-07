const express = require('express');
const router = express.Router();
const passport = require('../auth/passport');
const rights = require('../auth/rights');

const user = require('../controllers/user');
const meeting = require('../controllers/meeting');
const pool = require('../controllers/pool');

router.post('/register', user.register);
router.post('/login', user.login);

router.all('*', passport.authenticate('jwt', { session: false }));

router.get('/user', user.profile);
router.put('/user', user.update);
router.delete('/user/:id', user.delete);

router.get('/meeting/:id?', meeting.read);

router.get('/pool/:id?', pool.read);

router.use(rights.coach);

router.post('/meeting', meeting.create);
router.put('/meeting', meeting.update);
router.delete('/meeting/:id', meeting.update);

router.post('/pool', pool.create);
router.put('/pool', pool.update);
router.delete('/pool/:id', pool.update);

module.exports = router;
