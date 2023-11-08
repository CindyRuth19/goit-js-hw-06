const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const enteredValue = input.value.trim();
  const expectedLength = input.getAttribute("data-length");

  if (enteredValue.length === parseInt(expectedLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
