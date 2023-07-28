const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const homeRoutes = require('./api/home-routes');

router.use('/', homeRoutes);
router.use('/', userRoutes);

module.exports = router;
