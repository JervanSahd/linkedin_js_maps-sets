//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

const iceCream = new Set();
iceCream.add('chocolate')
.add('vanilla')
.add('coffee')
.add('coffee')
.add('strawberry')
.add('vanilla');

//Does our Set contain the following flavors:
//Mint Chocolate Chip?

const hasMintCC = iceCream.has('Mint Chocolate Chip')
console.log("Mint Chocolate Chip is a flavor of icecream", hasMintCC);

//Coffee?
const hasCoffee = iceCream.has('coffee')
console.log("Coffee is a flavor of icecream", hasCoffee);
