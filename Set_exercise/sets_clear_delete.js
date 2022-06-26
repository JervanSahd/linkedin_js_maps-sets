

const iceCream = new Set();
iceCream
  .add("chocolate")
  .add("vanilla")
  .add("coffee")
  .add("coffee")
  .add("strawberry")
  .add("vanilla");

//Delete vanilla from the iceCream Set.
iceCream.delete("chocolate");
console.log("Is Chocolate still there", iceCream);

//Clear the iceCream Set.
iceCream.clear();
console.log("How many flavors are there?", iceCream.size);
