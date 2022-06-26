const newYork = { city: "New York" };
const nola = { city: "New Orleans" };
const chicago = { city: "Chicago" };
const losAngeles = { city: "Los Angeles" };

//Create a WeakMap using the provided variables as keys.

const weakMap = new WeakMap();

//Set the value to whatever term you think of when you hear
//those cities. The value can be anything. Hint: use set()
weakMap.set(newYork, "Big Apple");
weakMap.set(nola, "Marti Gras");
weakMap.set(chicago, "Wendy City");
weakMap.set(losAngeles, "HollyWood");

//Get the value associated with the key: nola.
const getNola = weakMap.get(nola);
console.log(`It should say nola and it says ${getNola}`);

//Get the value associated with the key: dallas.
const dallas = { city: "Dallas" };
weakMap.set(dallas, "Steers");
const getDallas = weakMap.get(dallas);
console.log("The value for Dallas is ", getDallas);

//Does this WeakMap have the key: newYork?

const hasNewYork = weakMap.has(newYork);
console.log("Does this Weakmap have New York?", hasNewYork);

//Delete the following key from your WeakMap: chicago

weakMap.delete(chicago);
console.log("Chicago is deleted");

weakMap.get;
