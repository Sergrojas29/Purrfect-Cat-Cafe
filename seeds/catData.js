const { Cat } = require('../models');

const catData = [{
    name: 'Purrchill',
    breed: 'Maine Coon',
    size: 3,
    affection: 4,
    availability: 0,

},
{
    name: "Cleocatra",
    breed: "Charteux",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Draco Meowfoy",
    breed: "",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Hairy Pawter",
    breed: "Birman",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Kitty Smalls",
    breed: "Siamese cat",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "TuPaw Shapurr",
    breed: "American Shorthair",
    size: 3,
    affection: 5,
    availability: 0,
    picture: ""
},
{
    name: "Obi-Wan Catnobi",
    breed: "American Shorthair",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Meowlennium Falcon",
    breed: "American Shorthair",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Luke Skywhisker",
    breed: "American Shorthair",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
{
    name: "Catalie Pawtman",
    breed: "American Shorthair",
    size: 0,
    affection: 0,
    availability: 0,
    picture: ""
},
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
