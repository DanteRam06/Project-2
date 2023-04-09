const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const emailInput = document.getElementById('email');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.disabled = true;

// validate input fields and enable/disable submit button
function validateForm() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const emailValue = emailInput.value.trim();

    // check if all fields have input
    if (usernameValue && passwordValue && confirmPasswordValue && emailValue) {
      // confirm passwords match
      if (passwordValue === confirmPasswordValue) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
        // show error message
        confirmPasswordInput.setCustomValidity("Passwords must match");
      }
    } else {
      submitButton.disabled = true;
    }
}

// event listeners for input fields
usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

  // event listener for form submission
form.addEventListener('submit', (e) => {
 e.preventDefault();
    // CODE TO SUBMIT FORM TO DB GOES HERE
});