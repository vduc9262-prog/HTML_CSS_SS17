
const counterDisplay = document.getElementById("counter");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

let count = 0;

const updateCounter = () => {
  counterDisplay.textContent = count;
  localStorage.setItem("counterValue", count);
};

btnIncrease.addEventListener("click", () => {
  count++;
  updateCounter();
});

btnDecrease.addEventListener("click", () => {
  count--;
  updateCounter();
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

window.addEventListener("load", () => {
  count = Number(localStorage.getItem("counterValue")) || 0;
  updateCounter();
});