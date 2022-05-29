let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function getRandomCard() {
    return 5;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;    
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}

// Mathematics

let randomNumber = Math.random(); // Generates a random number between 0 and 1 (0 included but 1 excluded)
console.log(randomNumber);

randomNumber *= 6; // Number now ranges from 0 - 6 (0 is inluded but 6 in not)
console.log(randomNumber);

let flooredNumber = Math.floor(3.945); // Converts number to integer by removing the decimals
console.log(flooredNumber);

// Dice game

let dice = Math.floor(Math.random() * 6);
console.log(dice);