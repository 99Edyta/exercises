console.log("HEJ VERDEN!");
//const computerGuess = Math.ceil(Math.random() * 100);
//lavEtTalMellem1og100();
//function lavEtTalMellem1og100() {
//  return Math.ceil(Math.random() * 100);
//}

// document.querySelector("h1").textContent = lavEtTalMellem1og100();

const computerGuess = Math.ceil(Math.random() * 100);
console.log("computerGuess", computerGuess);

document.querySelector("#numberGuess").addEventListener("click", userClick);
function userClick() {
  const value = document.getElementById("guess").value;
  const input = Number(value);
  console.log("input", typeof input);

  if (input < computerGuess) {
    console.log("Dit gæt er for lavt!");
  } else if (input > computerGuess) {
    console.log("Dit gæt er for højt!");
  } else {
    console.log("Dit gæt er rigtigt!");
  }
}
