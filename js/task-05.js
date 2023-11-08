// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");
// const outputElContent = outputEl.textContent;

// inputEl.addEventListener("input", handleInput);

// function handleInput(event) {
//   let inputValidation =
//     event.currentTarget.value > ""
//       ? (outputEl.textContent = event.currentTarget.value)
//       : (outputEl.textContent = outputElContent);

//   return inputValidation;
// }

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
