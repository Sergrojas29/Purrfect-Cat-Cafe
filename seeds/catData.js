const { Cat } = require('../models');

const catData = [{
    name: 'Purrchill',
    breed: 'Maine Coon',
    size: "Mega Chonker",
    age: 6,
    affection: "Will sit on your lap",
    availability: "2023-08-07",

},
{
    name: "Cleocatra",
    breed: "Charteux",
    size: "A fine Boi",
    age: 3,
    affection: "Affectionate",
    
},
{
    name: "Draco Meowfoy",
    breed: "Persian",
    size: "Hefty Chonk",
    age: 2,
    affection: "Likes to lick",
   
},
{
    name: "Hairy Pawter",
    breed: "Birman",
    size: "He Chonky",
    age: 5,
    affection: "Just headpats",
  
},
{
    name: "Kitty Smalls",
    breed: "Siamese cat",
    size: "Mega Chonker",
    age: 4,
    affection: "Will climb you",

},
{
    name: "TuPaw Shapurr",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 1,
    affection: "Will take you food",
 
},
{
    name: "Obi-Wan Catnobi",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 7,
    affection: "Does mind tricks for treats",
    
},
{
    name: "Meowlennium",
    breed: "American Shorthair",
    size: "Hefty Chonk",
    age: 6,
    affection: "Love bites, I promise I dont hurt!",
    
},
{
    name: "Luke Skywhisker",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 4,
    affection: "Wants butt scratches but will try to know your drink over",
    
},
{
    name: "Catalie Pawtman",
    breed: "American Shorthair",
    size: "He Chonky",
    age: 3,
    affection: "Will beg and bunt",
    
},
{
    name: "Papaya",
    breed: "American Shorthair",
    size: "A Henkin Chonker",
    age: 6,
    affection: "",
    
},
]

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
