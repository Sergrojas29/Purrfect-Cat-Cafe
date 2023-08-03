const router = require('express').Router();
const { User, Cat } = require('../models');


const cats = [
	{
		id: 1,
		name: "Purrchill",
		breed: "Maine Coon",
		size: 3,
		age: 1,
		affection: 4,
		availability: 0,
		picture: null
	},
	{
		id: 2,
		name: "Cleocatra",
		breed: "Charteux",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 3,
		name: "Draco Meowfoy",
		breed: "Persian",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 4,
		name: "Hairy Pawter",
		breed: "Birman",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 5,
		name: "Kitty Smalls",
		breed: "Siamese cat",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 6,
		name: "TuPaw Shapurr",
		breed: "American Shorthair",
		size: 3,
		age: 1,
		affection: 5,
		availability: 0,
		picture: ""
	},
	{
		id: 7,
		name: "Obi-Wan Catnobi",
		breed: "American Shorthair",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 8,
		name: "Meowlennium Falcon",
		breed: "American Shorthair",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 9,
		name: "Luke Skywhisker",
		breed: "American Shorthair",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
	{
		id: 10,
		name: "Catalie Pawtman",
		breed: "American Shorthair",
		size: 0,
		age: 1,
		affection: 0,
		availability: 0,
		picture: ""
	},
  {
		id: 11,
		name: "Papaya",
		breed: "American Shorthair",
		size: 1,
		age: 1,
		affection: 9,
		availability: 1,
		picture: ""
	}
]

router.get('/main', async (req, res) => {
  res.render('homepage');
  // res.status(200).send("<h1>Hello</h1>")
});

router.get('/login', async (req, res) => {
  res.render('login');
  // res.status(200).send("<h1>Hello</h1>")
});

router.get('/meetourcats', async (req, res) => {
  const allCats = await Cat.findAll
  res.render('cat',{cats});
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
