const formEl = document.querySelector(".signup-form");
const inputEl = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const emailAddress = document.querySelector(".email-address");

function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  return regex.test(email);
}

function errorState() {
  errorMessage.classList.remove("hidden");
  inputEl.setAttribute("aria-invalid", "true");
  inputEl.focus();
}

function trueState() {
  errorMessage.classList.add("hidden");
  inputEl.setAttribute("aria-invalid", "false");
  inputEl.value = "";
}

formEl.addEventListener("submit", function (event) {
  if (!validateEmail(inputEl.value) || inputEl.value === "") {
    event.preventDefault();
    errorState();
  } else {
    localStorage.setItem("email", inputEl.value);
    trueState();
  }
});

window.addEventListener("load", function () {
  if (emailAddress) {
    const emailValue = localStorage.getItem("email");

    emailAddress.textContent = emailValue;
  }
});
