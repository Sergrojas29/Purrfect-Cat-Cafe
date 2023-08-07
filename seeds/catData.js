const { Cat } = require('../models');

const catData = [{
    name: 'Purrchill',
    breed: 'Maine Coon',
    size: "Mega Chonker",
    age: 6,
    affection: 4,
    availability: true,

},
{
    name: "Cleocatra",
    breed: "Charteux",
    size: "A fine Boi",
    age: 3,
    affection: 5,
    availability: true,
},
{
    name: "Draco Meowfoy",
    breed: "Persian",
    size: "Hefty Chonk",
    age: 2,
    affection: 1,
    availability: false,
},
{
    name: "Hairy Pawter",
    breed: "Birman",
    size: "He Chonky",
    age: 5,
    affection: 4,
    availability: true,
},
{
    name: "Kitty Smalls",
    breed: "Siamese cat",
    size: "Mega Chonker",
    age: 4,
    affection: 4,
    availability: false,
},
{
    name: "TuPaw Shapurr",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 1,
    affection: 5,
    availability: true,
},
{
    name: "Obi-Wan Catnobi",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 7,
    affection: 3,
    availability: true,
},
{
    name: "Meowlennium",
    breed: "American Shorthair",
    size: "Hefty Chonk",
    age: 6,
    affection: 2,
    availability: false,
},
{
    name: "Luke Skywhisker",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 4,
    affection: 3,
    availability: false,
},
{
    name: "Catalie Pawtman",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 3,
    affection: 5,
    availability: true,
},
{
    name: "Papaya",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 6,
    affection: 5,
    availability: true,
},
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
