const signInForm = document.querySelector('form');

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // need code to validate user input values

  
  signInUser(username, password);
});


// function for user sign-in
function signInUser(username, password) {
  // need code for request to sign in the user with the provided username and password

  // if sign-in is successful send user to home
  window.location.href = '/home';
}

// even listener for register button
const registerBtn = document.querySelector('input[type=register]');
registerBtn.addEventListener('click', () => {
  window.location.href = '/register';
});
