const router = require('express').Router();
const { Cat } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.get('/', async (req, res) => {
  try {
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
router.post('/', async (req, res) => {
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

router.put('/date/:id', async (req, res) => {
  console.log(req.body.date)
  try {
    // First grab the data
    const catData = await Cat.findByPk(req.params.id);

    // Initialize availabilityArray as an empty array if catData.availability is not defined
    let availabilityArray = [];

    try {
      if (catData.availability) {
        availabilityArray = JSON.parse(catData.availability);
      }
    } catch (error) {
      console.error('Error parsing availability JSON:', error);
    }

    // Check if the requested date is available
    const isNotAvailable = availabilityArray.includes(req.body.date);

    if (isNotAvailable) {
      // Date is not available, return an error response
      return res.status(200).json({ message: 'The date is not available. Pick another day for your appointment.' });
    } else {
      // Date is available, proceed with assigning the appointment to the cat
      // Your code to assign the appointment goes here

      // Add the new date to the availability array
      availabilityArray.push(req.body.date);

      // Update the cat's availability attribute
      catData.availability = JSON.stringify(availabilityArray);
      await catData.save();

      return res.status(200).json({ message: 'That date is available! We will see you then!' });
    }

    // ...

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});




router.delete('/date/:id', async (req, res) => {
  try {
    // Check if req.body.date is defined
    if (!req.body.date) {
      return res.status(400).send('Date parameter is missing in the request body.');
    }

    // First grab the data
    const catData = await Cat.findByPk(req.params.id);

    // Initialize availabilityArray as an empty array if catData.availability is not defined
    const availabilityArray = catData.availability ? JSON.parse(catData.availability) : [];

    // Check if the requested date exists in the availability array
    const dateIndex = availabilityArray.indexOf(req.body.date);

    if (dateIndex === -1) {
      // Date does not exist, return an error response
      console.log('The date does not exist in the availability list.');
      return res.status(400).send('The date does not exist in the availability list.');
    } else {
      // Date exists, proceed with deleting the date from the availability array
      availabilityArray.splice(dateIndex, 1);

      // Update the cat's availability attribute by converting the array back to JSON format
      catData.availability = JSON.stringify(availabilityArray);
      await catData.save();

      console.log('The date has been deleted from the availability list.');
      return res.sendStatus(200);
    }
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
