let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateInterface();
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateInterface();
});

function updateInterface() {
  valueElement.textContent = counterValue;
}
