const router = require('express').Router();
const { User } = require('../models');

router.get('/main', async (req, res) => {
  res.render('homepage');
  // res.status(200).send("<h1>Hello</h1>")
});

router.get('/login', async (req, res) => {
  res.render('login');
  // res.status(200).send("<h1>Hello</h1>")
});

router.get('/meetourcats', async (req, res) => {
  res.render('cat');
  // res.status(200).send("<h1>Hello</h1>")
});
router.get('/aboutus', async (req, res) => {
  res.render('cat');
  // res.status(200).send("<h1>Hello</h1>")
});
router.get('/menu', async (req, res) => {
  res.render('cat');
  // res.status(200).send("<h1>Hello</h1>")
});

module.exports = router;
