const { Cat } = require('../models');

const catData = [{
    name: 'Purrchill',
    breed: 'Maine Coon',
    size: "Mega Chonker",
    age: 6,
    affection: 4,
    availability: "2023-08-07",

},
{
    name: "Cleocatra",
    breed: "Charteux",
    size: "A fine Boi",
    age: 3,
    affection: 5,
    
},
{
    name: "Draco Meowfoy",
    breed: "Persian",
    size: "Hefty Chonk",
    age: 2,
    affection: 1,
   
},
{
    name: "Hairy Pawter",
    breed: "Birman",
    size: "He Chonky",
    age: 5,
    affection: 4,
  
},
{
    name: "Kitty Smalls",
    breed: "Siamese cat",
    size: "Mega Chonker",
    age: 4,
    affection: 4,

},
{
    name: "TuPaw Shapurr",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 1,
    affection: 5,
 
},
{
    name: "Obi-Wan Catnobi",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 7,
    affection: 3,
    
},
{
    name: "Meowlennium",
    breed: "American Shorthair",
    size: "Hefty Chonk",
    age: 6,
    affection: 2,
    
},
{
    name: "Luke Skywhisker",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 4,
    affection: 3,
    
},
{
    name: "Catalie Pawtman",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 3,
    affection: 5,
    
},
{
    name: "Papaya",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 6,
    affection: 5,
    
},
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
