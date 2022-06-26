const iceCream = new Set();
iceCream
  .add("chocolate")
  .add("vanilla")
  .add("coffee")
  .add("coffee")
  .add("strawberry")
  .add("vanilla");

//What is the first entry in our iceCream set?
const iceCreamEntries = iceCream.entries();

const firstEntry = iceCreamEntries.next().value;
console.log("The first flavor is ", firstEntry);
