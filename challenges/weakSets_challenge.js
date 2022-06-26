//Survey Respondents
const resOne = { id: 1234 };
const resTwo = { id: 5678 };
const resThree = { id: 9012 };
const resFour = { id: 3456 };

//Create a new WeakSet and add the above values to your newly created WeakSet.
const survey = new WeakSet();
survey.add(resOne).add(resTwo).add(resThree).add(resFour);
console.log("WeakSet", survey);

//Does your WeakSet have any responses tied to the {id: 9012}?
const has9012 = survey.has(resThree);
console.log("The survey does have responses tied to id 9012", has9012);

//Does your WeakSet have any responses tied to the {id: 0123}?
const has0123 = survey.has({ id: 0123 });
console.log("The survey does have responses tied to id 0123", has0123);

//We need to delete resThree from the WeakSet.
survey.delete(resThree);
console.log("Is resThree still there" ,survey.has(resThree));
