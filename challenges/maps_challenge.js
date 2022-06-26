//Maps: Challenge -using  (.get , .has, .size, .keys/.values , .next, .entries, .forEach, .clear, .delete )

//1. Create a new Map with the Best Pictures .

const movies = new Map();

movies.set(2020, "Parasite");
movies.set(2019, "Green Book");
movies.set(2018, "The Shape of Water");
movies.set(2017, "Moonlight");
movies.set(2016, "Spotlight");
movies.set(2015, "Birdman");
movies.set(2014, "12 Years a Slave");
movies.set(2013, "Argo");

//2. What film won best picture in 2015?
const get2015 = movies.get(2015);
console.log("Best movie in 2015 is", get2015);


//3. Does this list contain Best Picture from 2010? 2018?
const has2010 = movies.has(2010);
console.log(`The list does have a movie from 2018 ${has2010}`);

const has2018 = movies.has(2018);
console.log(`The list does have a movie from 2018 ${has2018}`);

//4. How many films are included in this list?
const sizeList = movies.size;
console.log(`The list contains ${sizeList} movies.`);

//5. What is the second key in this movies Map?
const movieKey = movies.keys();
movieKey.next();
const secondKey = movieKey.next().value;
console.log(`The second key is ${secondKey}`);

//6. What is the third value in this movies Map?

const movieValue = movies.values();
movieValue.next();
movieValue.next();
const thirdValue = movieValue.next().value;
console.log(`The third value is ${thirdValue}`);

//7. What is the first set of entries in this movies Map?
const movieEntries = movies.entries();
const firstSet = movieEntries.next().value;
console.log(`The first set  is ${firstSet}`);

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.

movies.forEach((value, key) => {
  if (key < 2017) {
    console.log(`The ${value} best picture was ${key} `);
  }
});

//9. Delete the Best Picture from 2013 from your movies Map.
movies.delete(2013);
console.log("2013 movie has been deleted", movies);

//10. Clear your movies Map.
movies.clear();
console.log("All movies have been cleared and is the size of", movies.size);
