const startButton = document.querySelector("#start-button");
const feedbackButtons = document.querySelectorAll("[data-answer]");
const guessElement = document.querySelector("#guess");
const statusElement = document.querySelector("#status");
const attemptsElement = document.querySelector("#attempts");
const messageElement = document.querySelector("#message");

let lowestNumber = 0;
let highestNumber = 100;
let currentGuess = 0;
let attempts = 0;

function makeGuess() {
  currentGuess = Math.floor((lowestNumber + highestNumber) / 2);
  attempts += 1;
  guessElement.textContent = currentGuess;
  attemptsElement.textContent = attempts;
  statusElement.textContent = "Er mit gæt for højt, for lavt eller rigtigt?";
  messageElement.textContent = "";
}

startButton.addEventListener("click", () => {
  lowestNumber = 0;
  highestNumber = 100;
  attempts = 0;
  startButton.textContent = "Start forfra";
  feedbackButtons.forEach((button) => {
    button.disabled = false;
  });
  makeGuess();
});

feedbackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.answer === "correct") {
      statusElement.textContent = `Jeg fandt dit tal: ${currentGuess}!`;
      messageElement.textContent = `Det tog mig ${attempts} gæt.`;
      startButton.textContent = "Spil igen";
      feedbackButtons.forEach((button) => {
        button.disabled = true;
      });
      return;
    }

    if (button.dataset.answer === "low") {
      lowestNumber = currentGuess + 1;
    } else {
      highestNumber = currentGuess - 1;
    }

    if (lowestNumber > highestNumber) {
      statusElement.textContent = "Svarene passer ikke sammen.";
      messageElement.textContent = "Start forfra og prøv igen.";
      feedbackButtons.forEach((button) => {
        button.disabled = true;
      });
      return;
    }

    makeGuess();
  });
});
