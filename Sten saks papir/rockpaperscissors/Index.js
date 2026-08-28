"use strict";
let computerensValg;
let brugernensValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
function rockClicked() {
  console.log("ROCK CLICKED");
  brugernensValg = "rock";
  træffervalg();
}
function paperClicked() {
  console.log("PAPER CLICKED");
  brugernensValg = "paper";
  træffervalg();
}
function scissorsClicked() {
  console.log("SCISSOER CLICKED");
  brugernensValg = "scissors";
  træffervalg();
}

function træffervalg() {
  console.log("brugerensValg", brugernensValg);
  computerensValg = "scissors";
  nedTælling();
}

function nedTælling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg());
  player2.addEventListener("animationend", visValg());
}

function visValg() {
  afgoerResultatet();
}

function afgoerResultatet() {
  console.log("brugerensValg", brugernensValg);
  console.log("computerensValg", computerensValg);
}
