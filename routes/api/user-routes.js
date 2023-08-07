const router = require('express').Router();
const { User, Cat } = require('../../models');
const withAuth = require('../../utils/auth');


// /api/user/

//GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        Cat
      ]

    })
    res.status(200).json(userData)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
});

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll(
      {
        include: [
          Cat
        ]
      }
    )

    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err);
  }
})

// UPDATE user's cat
router.put('/cat/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.update(
      {
        cat_id: req.body.cat_id
      },
      {
        where: {
          id: req.params.id,
        },
      });

    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user password
router.put('/password/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.update(
      {
        password: req.body.password
      },
      {
        where: { id: req.params.id },
        individualHooks: true,
      },
    );
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
//test create user with HTML POST
// router.post( '/:', async (req, res) => {

// })
router.post('/', async (req, res) => {
  try {
    if (req.body.first_name && req.body.last_name && req.body.password && req.body.email) {
      const dbUserData = await User.create(req.body);
      console.log(dbUserData)
      req.session.loggedIn = true;
      res.status(200).redirect('/meetourcats')
    } else {

    }





  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });


    const validPassword =  dbUserData.checkPassword(req.body.password);

    if (!validPassword || !dbUserData) {
      // If password is invalid, respond with an error
       res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
       return 
    } else { 
      
      // At this point, both email and password are valid
    req.session.loggedIn = true;
    req.session.currentUser = dbUserData;
    console.log(req.session);
    
    // Redirect to a successful login page
    return res.status(200).redirect('/meetourcats');
    }

    
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


// // Logout
// router.get('/logout', async (req, res) => {
//   req.session.loggedIn = false;
//   res.status(200).redirect('/home')
// });

module.exports = router;