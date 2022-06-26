

const iceCream = new Set();
iceCream
  .add("chocolate")
  .add("vanilla")
  .add("coffee")
  .add("coffee")
  .add("strawberry")
  .add("vanilla");

//What is the second value in our iceCream Set?

const iceCreamValue = iceCream.values();
iceCreamValue.next();
console.log("The second flavor of icecream is", iceCreamValue.next().value);
