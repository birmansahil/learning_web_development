let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log(sum);

if (sum < 21) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game";
    isAlive = false;
}

// Log out message

console.log(message);

// Cash Out

console.log(hasBlackJack);
console.log(isAlive);

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
