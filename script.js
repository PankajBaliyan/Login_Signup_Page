// Define all variables
const login_boy = document.getElementById("login_boy");
const signup_boy = document.getElementById("signup_boy");
const register_tick = document.getElementById("register_tick");
const registration_submit = document.getElementById("registration_submit");
const registration_name = document.getElementById("registration_name");
const registration_email = document.getElementById("registration_email");
const registration_stream = document.getElementById("registration_stream");
const registration_password = document.getElementById("registration_password");

// Cache DOM elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginContainer = document.querySelector('.outer-login-div');
const registerContainer = document.querySelector('.outer-registration');

// Attach event listener using event delegation
document.addEventListener('click', function(event) {
  if (event.target === loginBtn) {
    showLoginForm();
  } else if (event.target === registerBtn) {
    showSignupForm();
  }
});

// SHOW LOGIN CONTAINER
function showLoginForm() {
  registerBtn.classList.remove("navbar");
  loginBtn.classList.add("navbar");
  login_boy.style.display = "block";
  signup_boy.style.display = "none";
  loginContainer.style.display = "block";
  registerContainer.style.display = "none";
}

// SHOW REGISTRATION CONTAINER
function showSignupForm() {
  loginBtn.classList.remove("navbar");
  registerBtn.classList.add("navbar");
  login_boy.style.display = "none";
  signup_boy.style.display = "block";
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
}

// FUNCTION FOR SHOW PASSWORD IN TEXT FORMAT
document.getElementById("login_show_password_check").addEventListener("click", showPassword);
function showPassword() {
  const passwordInput = document.querySelector('#login_Password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// FUNCTION TO ENABLE/DISABLE LOGIN BUTTON ACCORDING TO ACCEPT TERMS & CONDITIONS
const loginCheckbox = document.querySelector('#login_tick');
loginCheckbox.addEventListener('click', toggleLoginButton);

function toggleLoginButton() {
  if (checkLoginInputs() === 1) {
    loginCheckbox.checked = !loginCheckbox.checked;
  } else {
    loginCheckbox.checked = false;
  }
}


// FUNCTION TO CHECK LOGIN BOX WHEN CLICK ON THEIR TEXT
document.querySelector('#checkLoginInputs').addEventListener('click', checkLoginInputs);
function checkLoginInputs() {
  const emailInput = document.querySelector('#login_Email');
  const passwordInput = document.querySelector('#login_Password');
  const submitButton = document.querySelector('#login_submit');
  const termsCheckbox = document.querySelector('#login_tick');

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please make sure you have filled in the email and password fields.");
    termsCheckbox.checked = false;
    submitButton.disabled = true;
    return 0;
  } else {
    submitButton.disabled = !submitButton.disabled;
    termsCheckbox.checked = !termsCheckbox.checked;
    return 1;
  }
}

// FUNCTION TO SHOW PASSWORD IN READABLE FORMAT
const passwordCheckbox = document.querySelector('#login_show_password_tick');
passwordCheckbox.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
  showPassword();
  document.querySelector("#login_show_password_check").checked = !document.querySelector("#login_show_password_check").checked;
}

// FUNCTION FOR SHOW TOAST ON LOGIN SUCCESSFUL
document.getElementById("login_submit").addEventListener("click", loginToast);
function loginToast() {
  const email = document.querySelector('#login_Email').value;
  const password = document.querySelector('#login_Password').value;
  const credentials = `Email: ${email} \nPassword: ${password}`;

  swal({
    title: 'Your Credentials!',
    text: credentials,
    icon: 'success',
  }).then(() => {
    window.location.reload();
  });

  const snackbar = document.querySelector('#snackbar_login');
  snackbar.classList.add('show');
  setTimeout(() => {
    snackbar.classList.remove('show');
  }, 3000);
}

//FUNCTION TO TICK/UN-TICK REGISTRATION TERMS & CONDITION CHECKBOX ACCORDING TO CERTAIN CONDITION
register_tick.addEventListener("click", enable_disable_registration_btn);
function enable_disable_registration_btn() {
  if (registration_checkbox() == 1) {
    if (register_tick.checked == true) {
      register_tick.checked = false;
    } else {
      register_tick.checked = true;
    }
    if (registration_submit.disabled == true) {
      registration_submit.disabled = false;
    } else {
      registration_submit.disabled = true;
    }
  } else {
    register_tick.checked = false;
    registration_submit.disabled = true;
  }
}


//FUNCTION TO CHECK TERMS & CONDITION AND ENABLE/DISABLE REGISTRATION BUTTON
document.getElementById("term_condition").addEventListener("click", registration_checkbox);
function registration_checkbox() {
  const name = registration_name.value;
  const email = registration_email.value;
  const stream = registration_stream.value;
  const password = registration_password.value;

  if (!name || !email || !stream || !password) {
    register_tick.checked = false;
    registration_submit.disabled = true;
    alert("Make sure you have filled all details.");
    return 0;
  } else {
    if (register_tick.checked == false) {
      register_tick.checked = true;
      registration_submit.disabled = false;
    } else {
      register_tick.checked = false;
      registration_submit.disabled = true;
    }
    return 1;
  }
}


// FUNCTION TOAST FOR REGISTRATION SUCCESSFUL
document.getElementById("registration_submit").addEventListener("click", registration_toast);
function registration_toast() {
  const credentials = `Username :- ${registration_name.value} \n Email :- ${registration_email.value}`;
  showSuccessMessage(credentials);
}
function showSuccessMessage(credentials) {

  swal("Your Credentials!", `${credentials}`, "success").then((value) => {
    window.location.reload();
  });

  const snackbar = document.querySelector('#snackbar_registration');
  snackbar.classList.add('show');
  setTimeout(() => {
    snackbar.classList.remove('show');
  }, 3000);
}
