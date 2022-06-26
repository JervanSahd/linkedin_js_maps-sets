//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, "walk the dogs");
saturday.set(12, "lunch");
saturday.set(3, "watch a movie");

//What is the first key in your saturday Map object?
const saturdayKeys = saturday.keys();
const firstKey = saturdayKeys.next().value;
console.log("The first key in the map is", firstKey);

//What is the second value in your saturday Map object?
const saturdayValue = saturday.values();
const firstValue = saturdayValue.next().value;
console.log("The first value in the map is", firstValue);
