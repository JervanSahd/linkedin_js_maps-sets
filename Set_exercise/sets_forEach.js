const iceCream = new Set();
iceCream
  .add("chocolate")
  .add("vanilla")
  .add("coffee")
  .add("coffee")
  .add("strawberry")
  .add("vanilla");

//Loop through our iceCream Set and if the value does NOT equal 'vanilla',
//log it in the console.
iceCream.forEach((value) => {
  if (value !== "vanilla") {
    console.log("The flavor is", value);
  } else {
    console.log("Vanilla is a flavor");
  }
});
