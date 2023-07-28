const router = require('express').Router();
const { Cat } = require('../models');



// GET one cat
router.get('/Cat/:id', async (req, res) => {
  try {
    const dbCatData = await Cat.findByPk(req.params.id);

    // const cat = dbCatData.get({ plain: true });

    res.status(200).json(dbCatData)
    // res.render('cat', { cat, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
