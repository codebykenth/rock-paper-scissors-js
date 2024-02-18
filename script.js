"use strict";

const mainEl = document.querySelector("main");
const headerEl = document.querySelector("header");
const btnStart = document.querySelector(".btn--start");
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");
const questionEl = document.querySelector(".question");
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const playel0El = document.querySelector(".player--0");
const playel1El = document.querySelector(".player--1");
const againEl = document.querySelector(".btn--again");

let clickedOption;
let randomNumber;
let score;
let isPlaying;

// Initialize all to default
function init() {
  score = [0, 0];
  isPlaying = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playel0El.classList.remove("game-winner");
  playel1El.classList.remove("game-winner");
  playel0El.classList.remove("game-loser");
  playel1El.classList.remove("game-loser");
  againEl.classList.add("hidden");
  questionEl.src = 'question.png';
}

function generateRandom() {
  // Generate random number for computer player
  randomNumber = Math.trunc(Math.random() * 3) + 1;
  // Change the image depending on random number generated
  questionEl.src = `option--${randomNumber}.png`;
}

// Change and display the score
function displayScore() {
  score0El.textContent = score[0];
  score1El.textContent = score[1];
}

function condition(clickedOption) {
  if (isPlaying) {
    generateRandom();
    /*
       Rock button is clicked if clickedOption = 1 
       Paper button is clicked if clickedOption = 2
       Scissors button is clicked if clickedOption = 3
      
       Rock = 1 = Random number = 1
       Paper = 1 = Random number = 2
       Scissors = 1 = Random number = 3
      */
    if (clickedOption === 1) {
      // Conditions if player picked rock
      if (randomNumber === 1) {
        console.log("Draw");
      } else if (randomNumber === 2) {
        console.log("You lose");
        score[1] += 1;
      } else {
        console.log("You win");
        score[0] += 1;
      }
    } else if (clickedOption === 2) {
      // Conditions if player picked paper
      if (randomNumber === 1) {
        console.log("You win");
        score[0] += 1;
      } else if (randomNumber === 2) {
        console.log("Draw");
      } else {
        console.log("You lose");
        score[1] += 1;
      }
    } else {
      // Conditions if player picked scissors
      if (randomNumber === 1) {
        console.log("You lose");
        score[1] += 1;
      } else if (randomNumber === 2) {
        console.log("You win");
        score[0] += 1;
      } else {
        console.log("Draw");
      }
    }
    displayScore();
    checkWinner(score[0], score[1]);
  }
}

function checkWinner(score0, score1) {
  // Check if the game already end
  if (score0 === 5 || score1 === 5) {
    againEl.classList.remove("hidden"); // Displays play again button

    if (score0 > score1) {
      // Player win
      playel0El.classList.add("game-winner");
      playel1El.classList.add("game-loser");
    } else {
      // Computer win
      playel0El.classList.add("game-loser");
      playel1El.classList.add("game-winner");
    }
    isPlaying = false;
  }
}

init(); // Initalize

mainEl.classList.add("hidden"); // Hide main element

// Funtionality for start button
document.querySelector(".btn--start").addEventListener("click", function () {
  mainEl.classList.remove("hidden");
  btnStart.classList.add("hidden");
  headerEl.classList.add("hidden");
});

// Funtionality for rock button
document.querySelector(".btn--rock").addEventListener("click", function () {
  clickedOption = 1;

  condition(clickedOption);
});

// Funtionality for paper button
document.querySelector(".btn--paper").addEventListener("click", function () {
  clickedOption = 2;
  condition(clickedOption);
});

// Funtionality for scissors button
document.querySelector(".btn--scissors").addEventListener("click", function () {
  clickedOption = 3;
  condition(clickedOption);
});

// Functionality for play again
document.querySelector(".btn--again").addEventListener("click", function () {
  init();
});