const router = require('express').Router();
const { Cat } = require('../../models');

/// /api/cat/

// GET one cat
router.get('/:id', async (req, res) => {
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

// GET all cats
router.get('/', async (req,res) =>{
  try{
    const dbCatData = await Cat.findAll()

    // res.render('homepage', {
    //   cats,
    // })

    res.status(200).json(dbCatData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  })

  // DELETE cat
  router.delete('/:id', async (req, res) => {
    try {
      Cat.destroy({
        where: {
          id: req.params.id,
        }
      })
      res.status(200).json('Kitty Deleted')
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  })

  // CREATE cat
router.post('/', async (req, res) =>{
  try {
   const newCat = await Cat.create(req.body);

      res.status(200).json(newCat);
  } catch (error) {
    console.log(error)
    req.status(500).json(error)
  }
})

// UPDATE cat
router.put('/:id', async (req, res) => {
  try {
    const catData = await Cat.update(req.body,
    {
      where: {
        id: req.params.id,
      },
    });
    if (!catData) {
      res.status(404).json({ message: 'No kitty with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
