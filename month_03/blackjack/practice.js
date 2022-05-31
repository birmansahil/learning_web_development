// Night Club 

let age = 100;

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}

// Birthday card from the king 

if (age < 100) {
    console.log("Not elegible");
} else if (age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not elegible, you have already gotten one");
}

// Practice boolean conditional statements

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

// Array is an ordered list of items 
let courses = ["HTML", "CSS", "JS", "NodeJS", "ReactJS"];

console.log(courses);

// Array's are zero indexed - meaning their item count starts from zero
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[0]);

// Array are composite or complex data type they can contain different data types (primitive data types i.e. string, bollean, number) within them 
let bio = ["Mandy", 33, true];

// Adding and removing items from an array
// We use different methods to achieve different results in arrays
// Methods is a fancy way of saying a function on an object

let items = [7, 4];

items.push = 6; // add item at end - returns new length of the array

items.pop(); // remove last item - returns the removed item

// Learning about "for loop"

for (let count = 1; count < 11; count += 1) {
    console.log(count);
}

for (let count = 10; count <= 100; count +=10 ) {
    console.log(count);
}

// Combining arrays and for loops

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]

// i++ is syntactical sugar that JS provides us with to make our code look preetier, i++ is exactly the same as i += 1 which is same as i = i + 1
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

let numbers = [7, 3, 9];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Racing Game, returning from a function

let player1Time = 102;
let player2Time = 105;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player1Time > player2Time) {
        return player2Time;
    } else {
        return player1Time;
    }
}

let fastestRaceTime = getFastestRaceTime();
console.log(fastestRaceTime);

function getTotalRaceTime () {
    return player1Time + player2Time;
}

let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime);

// Mathematics

let randomNumber = Math.random(); // Generates a random number between 0 and 1 (0 included but 1 excluded)
console.log(randomNumber);

randomNumber *= 6; // Number now ranges from 0 - 6 (0 is inluded but 6 in not)
console.log(randomNumber);

let flooredNumber = Math.floor(3.945); // Converts number to integer by removing the decimals
console.log(flooredNumber);

// Dice game

function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
} 

console.log(rollDice());