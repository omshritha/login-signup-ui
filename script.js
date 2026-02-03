// Function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Login Validation
function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  document.getElementById("loginEmailError").innerText = "";
  document.getElementById("loginPasswordError").innerText = "";

  let valid = true;

  if (!isValidEmail(email)) {
    document.getElementById("loginEmailError").innerText = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("loginPasswordError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Login Successful!");
  }
}

// Signup Validation
function validateSignup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  let valid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").innerText = "Name cannot be empty";
    valid = false;
  }

  if (!isValidEmail(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Signup Successful!");
  }
}
