const startButton = document.getElementById("startButton");
const startLabel = document.getElementById("startLabel");
const tooLowButton = document.getElementById("tooLowButton");
const correctButton = document.getElementById("correctButton");
const tooHighButton = document.getElementById("tooHighButton");
const guessNumber = document.getElementById("guessNumber");
const guessHint = document.getElementById("guessHint");
const statusText = document.getElementById("statusText");
const attemptCount = document.getElementById("attemptCount");
const lowerBound = document.getElementById("lowerBound");
const upperBound = document.getElementById("upperBound");
const gamePanel = document.querySelector(".game-panel");

let minimum = 0;
let maximum = 100;
let currentGuess;
let attempts = 0;
let gameActive = false;

function showNextGuess() {
  currentGuess = Math.floor((minimum + maximum) / 2);
  attempts += 1;
  attemptCount.textContent = attempts;
  guessNumber.textContent = currentGuess;
  guessNumber.classList.remove("pop");
  void guessNumber.offsetWidth;
  guessNumber.classList.add("pop");
  lowerBound.textContent = minimum;
  upperBound.textContent = maximum;
  guessHint.textContent = "Er mit gæt for højt, for lavt eller rigtigt?";
}

function setAnswerButtonsDisabled(disabled) {
  tooLowButton.disabled = disabled;
  correctButton.disabled = disabled;
  tooHighButton.disabled = disabled;
}

function startGame() {
  minimum = 0;
  maximum = 100;
  attempts = 0;
  gameActive = true;
  gamePanel.classList.remove("finished");
  startLabel.textContent = "Genstart spillet";
  statusText.textContent = "Tænk på et tal mellem 0 og 100";
  setAnswerButtonsDisabled(false);
  showNextGuess();
}

function finishGame(message) {
  gameActive = false;
  statusText.textContent = message;
  guessHint.textContent = `Jeg fandt tallet på ${attempts} gæt.`;
  gamePanel.classList.add("finished");
  setAnswerButtonsDisabled(true);
}

startButton.addEventListener("click", startGame);

correctButton.addEventListener("click", () => {
  if (!gameActive) return;
  finishGame(`Tallet var ${currentGuess}!`);
});

tooLowButton.addEventListener("click", () => {
  if (!gameActive) return;
  minimum = currentGuess + 1;
  if (minimum > maximum) {
    finishGame("Der er en modstrid i svarene.");
    return;
  }
  showNextGuess();
});

tooHighButton.addEventListener("click", () => {
  if (!gameActive) return;
  maximum = currentGuess - 1;
  if (minimum > maximum) {
    finishGame("Der er en modstrid i svarene.");
    return;
  }
  showNextGuess();
});
