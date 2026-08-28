const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateColumns, 500);

function generateColumns() {
  const randomNum = Math.floor(Math.random() * 101);
  valueArr.push(randomNum);
  if (valueArr.length > 20) {
    // console.log("nu er arrayet længere end 20");
    valueArr.shift();
    list.firstElementChild.remove();
  }
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);
  console.log("valueArr", valueArr);
}
