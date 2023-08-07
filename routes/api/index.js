const router = require('express').Router();

const userRoutes = require('./user-routes');
const catRoutes = require('./cat-routes');

router.use('/user', userRoutes);
router.use('/cat', catRoutes);

router.use((req, res)=>{
    
    res.send("<h1>Wrong Route</h1>")
})

module.exports = router;
