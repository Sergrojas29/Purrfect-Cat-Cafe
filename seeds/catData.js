const { Cat } = require('../models');

const catData = [{
    name: 'Purrchill',
    breed: 'Maine Coon',
    size: 5,
    age: 6,
    affection: 4,
    availability: true,

},
{
    name: "Cleocatra",
    breed: "Charteux",
    size: 1,
    age: 3,
    affection: 5,
    availability: true,
},
{
    name: "Draco Meowfoy",
    breed: "Persian",
    size: 4,
    age: 2,
    affection: 1,
    availability: false,
},
{
    name: "Hairy Pawter",
    breed: "Birman",
    size: 2,
    age: 5,
    affection: 4,
    availability: true,
},
{
    name: "Kitty Smalls",
    breed: "Siamese cat",
    size: 5,
    age: 4,
    affection: 4,
    availability: false,
},
{
    name: "TuPaw Shapurr",
    breed: "American Shorthair",
    size: 3,
    age: 1,
    affection: 5,
    availability: true,
},
{
    name: "Obi-Wan Catnobi",
    breed: "American Shorthair",
    size: 2,
    age: 7,
    affection: 3,
    availability: true,
},
{
    name: "Meowlennium",
    breed: "American Shorthair",
    size: 4,
    age: 6,
    affection: 2,
    availability: false,
},
{
    name: "Luke Skywhisker",
    breed: "American Shorthair",
    size: 2,
    age: 4,
    affection: 3,
    availability: false,
},
{
    name: "Catalie Pawtman",
    breed: "American Shorthair",
    size: 2,
    age: 3,
    affection: 5,
    availability: true,
},
{
    name: "Papaya",
    breed: "American Shorthair",
    size: 3,
    age: 6,
    affection: 5,
    availability: true,
},
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
