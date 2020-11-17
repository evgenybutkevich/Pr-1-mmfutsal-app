const router = require('express').Router();

router.use('/news', require('./news'));
router.use('/players', require('./players'));
router.use('/seasons', require('./seasons'));
router.use('/sections', require('./sections'));
router.use('/teams', require('./teams'));
router.use('/users', require('./users'));

module.exports = router;
