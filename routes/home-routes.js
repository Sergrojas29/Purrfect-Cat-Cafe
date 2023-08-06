const router = require('express').Router();
const { User, Cat } = require('../models');


// const cats = [
// 	{
// 		id: 1,
// 		name: "Purrchill",
// 		breed: "Maine Coon",
// 		size: 3,
// 		age: 1,
// 		affection: 4,
// 		availability: 0,
// 		picture: null
// 	},
// 	{
// 		id: 2,
// 		name: "Cleocatra",
// 		breed: "Charteux",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 3,
// 		name: "Draco Meowfoy",
// 		breed: "Persian",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 4,
// 		name: "Hairy Pawter",
// 		breed: "Birman",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 5,
// 		name: "Kitty Smalls",
// 		breed: "Siamese cat",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 6,
// 		name: "TuPaw Shapurr",
// 		breed: "American Shorthair",
// 		size: 3,
// 		age: 1,
// 		affection: 5,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 7,
// 		name: "Obi-Wan Catnobi",
// 		breed: "American Shorthair",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 8,
// 		name: "Meowlennium Falcon",
// 		breed: "American Shorthair",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 9,
// 		name: "Luke Skywhisker",
// 		breed: "American Shorthair",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
// 	{
// 		id: 10,
// 		name: "Catalie Pawtman",
// 		breed: "American Shorthair",
// 		size: 0,
// 		age: 1,
// 		affection: 0,
// 		availability: 0,
// 		picture: ""
// 	},
//   {
// 		id: 11,
// 		name: "Papaya",
// 		breed: "American Shorthair",
// 		size: 1,
// 		age: 1,
// 		affection: 9,
// 		availability: 1,
// 		picture: ""
// 	}
// ]

router.get('/home', async (req, res) => {
	const loggedIn = req.session.loggedIn
	if (req.session.loggedIn) {
		res.render('homepage',{loggedIn});
	}	
	res.render('homepage', {loggedIn} );
});

router.get('/login', async (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('login', {loggedIn});
});

router.get('/meetourcats', async (req, res) => {
	
	try {		
		const loggedIn = req.session.loggedIn
		if (loggedIn) {
			const allCats = await Cat.findAll()
			const cats = allCats.map((cat) => cat.get({ plain: true }));
			res.render('cat', {cats,loggedIn} );
		}
		else{
			res.render('login', {loggedIn});
		}	// console.log(catdata);


	} catch (error) {
		res.status(500).json(error)
	}

});

router.get('/aboutus', async (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('aboutUs', {loggedIn});
});
router.get('/menu', async (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('menu', {loggedIn});
});

router.get('/logout', async (req, res) => {
	req.session.loggedIn = false
	const loggedIn = req.session.loggedIn
	res.render('homepage', {loggedIn})
}
)


router.get('/:id', async (req, res) => {
	try {
		const loggedIn = req.session.loggedIn
		const catData = await Cat.findByPk(req.params.id)
		const cat = catData.get({ plain: true })
		console.log(cat);
		res.render('catProfile', {cat, loggedIn})

	} catch (error) {
		console.log(error);

	}
}
)




module.exports = router;
