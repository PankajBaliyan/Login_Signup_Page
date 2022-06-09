//DEFINE ALL VERIABLES
function allVariables () {
  const login_form = document.getElementById("login_form");
  const registration_form = document.getElementById("registration_form");
  const navbar = document.getElementById("navbar");
  const login_boy = document.getElementById("login_boy");
  const signup_boy = document.getElementById("signup_boy");
  const login_tick = document.getElementById("login_tick");
  const login_Email = document.getElementById("login_Email");
  const login_Password = document.getElementById("login_Password");
  const login_submit = document.getElementById("login_submit");
  const login_show_password_check = document.getElementById("login_show_password_check");
  const snackbar_login = document.getElementById("snackbar_login");
  const register_tick = document.getElementById("register_tick");
  const registration_submit = document.getElementById("registration_submit");
  const registration_name = document.getElementById("registration_name");
  const registration_email = document.getElementById("registration_email");
  const registration_stream = document.getElementById("registration_stream");
  const registration_password = document.getElementById("registration_password");
  const snackbar_registration = document.getElementById("snackbar_registration");
}
allVariables();

// SHOW LOGIN CONTAINER
function login() {
  login_form.style.left = "90px";
  registration_form.style.left = "650px";
  navbar.style.left = "0px";
  login_boy.style.display = "block";
  signup_boy.style.display = "none";
}

// SHOW REGISTRATION CONTAINER
function register() {
  login_form.style.left = "-300px";
  registration_form.style.left = "10px";
  navbar.style.left = "110px";
  login_boy.style.display = "none";
  signup_boy.style.display = "block";
}

// FUNCTION FOR SHOW PASSWORD IN TEXT FORMAT
function showPassword() {
  if (login_Password.type === "password") {
    login_Password.type = "text";
  } else {
    login_Password.type = "password";
  }
}

// FUNCTION TO ENABLE/DISABLE LOGIN BUTTON ACCORDING TO ACCEPT TERMS & CONDITIONS
function enable_disable_login_btn() {
  if (login_checkbox_tick() == 1) {
    if (login_tick.checked == true) {
      login_tick.checked = false;
    } else {
      login_tick.checked = true;
    }
  } else {
    login_tick.checked = false;
  }
}

// FUNCTION TO CHECK LOGIN BOX WHEN CLICK ON THEIR TEXT
function login_checkbox_tick() {
  if (login_Email.value == "" || login_Password.value == "") {
    alert("Make sure you have fill email & password");
    login_tick.checked = false;
    login_submit.disabled = true;
    return 0;
  } else {
    //LOGIN TERMS & CONDITION
    if (login_submit.disabled == true) {
      login_submit.disabled = false;
    } else {
      login_submit.disabled = true;
    }

    //CHECK CHANGE STATE OF CHECKBOX
    if (login_tick.checked == true) {
      login_tick.checked = false;
    } else {
      login_tick.checked = true;
    }
    return 1;
  }
}

// FUNCTION TO SHOW PASSWORD IN READABLE FORMAT
function login_show_password_tick() {
  showPassword();
  if (login_show_password_check.checked == true) {
    login_show_password_check.checked = false;
  } else if (login_show_password_check.checked == false) {
    login_show_password_check.checked = true;
  }
}

// FUNCTIO FOR SHOW TOAST ON LOGIN SUCCESSFULL
function login_toast() {
  // LOGIN SUCCESSFULL POPUP BOX CENTER OF PAGE
  const Credentials = [
    `Email :- ${login_Email.value} \n Password :- ${login_Password.value}`,
  ];
  swal("Your Credentials!", `${Credentials}`, "success").then((value) => {
    window.location.reload();
  });

  // BOTTOM SUCCESSFUL MESSAGE
  snackbar_login.className = "show";
  setTimeout(function () {
    snackbar_login.className = snackbar_login.className.replace("show", "");
  }, 3000);
}

//FUNCTION TO TICK/UNTICK RETISTRATION TERMS & CONDITION CHECKBOX ACCORDING TO CERTAIN CONDITION
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
function registration_checkbox() {
  if (
    registration_name.value == "" ||
    registration_email.value == "" ||
    registration_stream.value == "" ||
    registration_password.value == ""
  ) {
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
function registration_toast() {
  snackbar_registration.className = "show";
  setTimeout(function () {
    snackbar_registration.className = snackbar_registration.className.replace("show", "");
  }, 3000);

  // REGISTRATION SUCCESSFULL POPUP BOX CENTER OF PAGE
  const Credentials = [
    `Username :- ${registration_name.value} \n Email :- ${registration_email.value}`,
  ];
  swal("Your Credentials!", `${Credentials}`, "success").then((value) => {
    window.location.reload();
  });
}
