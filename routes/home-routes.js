const router = require('express').Router();
const { User, Cat } = require('../models');



router.get('/', async (req, res) => {
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


// router.get('/:id', async (req, res) => {
// 	try {
// 		const loggedIn = req.session.loggedIn
// 		const catData = await Cat.findByPk(req.params.id)
// 		const cat = catData.get({ plain: true })
// 		console.log(cat);
// 		res.render('catProfile', {cat, loggedIn})

// 	} catch (error) {
// 		console.log(error);

// 	}
// }
// )




module.exports = router;
