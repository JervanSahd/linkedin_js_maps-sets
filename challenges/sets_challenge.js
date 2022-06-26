//Letters Guessed
//You are playing a game of snowman with a friend and keep track of
//letters that have been guessed using Set().
//Follow the tasks below to test your knowledge.

//1. So far, your friend has gussed the following letters: r, s, t, l, n, e.
//Create a Set using the letters guessed thus far.
const snowman = new Set();
snowman.add("r").add("s").add("t").add("l").add("n").add("e");
console.log(snowman);

//2. Your friend takes another guess: p. Before you add it to the set check
//to see if the Set has 'p'. If not, add it to the Set.
const hasP = snowman.has("p");
console.log("The set does have a 'p' ", hasP);

if (!hasP) {
  snowman.add("p");
  console.log("P has been added");
  console.log(snowman);
}

//3. At this point, we will assume your friend hasn't tried to guess the same letter twice.
//The size of the Set will indicate how many guesses he's made. How many guesses
//has your friend made?

console.log(`Your friend has made ${snowman.size} guesses`);

//4. Delete the letter 'l' from your Set.

const deleteL = snowman.delete("l");
console.log(`Has l been deleted: ${deleteL}`);

//5. What is the second value in your Set?

const guessesValue = snowman.values();
guessesValue.next().value;
const secondValue = guessesValue.next().value;
console.log("The second value is", secondValue);

//6. What is the first entry in your Set?
const firstEntry = snowman.entries();
console.log("The first entry is", firstEntry.next().value)


//7. For each entry in your Set, log out whether the guess was a consonant or a vowel.
//This one is a little challenging!
const vowels = ["a", "e", "i", "o", "u"];
snowman.forEach((value)=>{
    const letterType = vowels.includes(value) ? 'vowel' : 'consonant'
    console.log(`The letter ${value} is an ${letterType}`);
})

//8. Clear your Set!
snowman.clear();
console.log("Confirming that the guesses were cleared", snowman.size);
