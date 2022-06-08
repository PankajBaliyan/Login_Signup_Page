// SHOW LOGIN CONTAINER
function login() {
  document.getElementById("login_form").style.left = "90px";
  document.getElementById("registration_form").style.left = "650px";
  document.getElementById("navbar").style.left = "0px";
  document.getElementById("login_boy").style.display = "block";
  document.getElementById("signup_boy").style.display = "none";
}

// SHOW REGISTRATION CONTAINER
function register() {
  document.getElementById("login_form").style.left = "-300px";
  document.getElementById("registration_form").style.left = "10px";
  document.getElementById("navbar").style.left = "110px";
  document.getElementById("login_boy").style.display = "none";
  document.getElementById("signup_boy").style.display = "block";
}

// FUNCTION FOR SHOW PASSWORD IN TEXT FORMAT
function showPassword() {
  let x = document.getElementById("login_Password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// FUNCTION TO ENABLE/DISABLE LOGIN BUTTON ACCORDING TO ACCEPT TERMS & CONDITIONS
function enable_disable_login_btn() {
  // login_checkbox_tick();
  let ltick = document.getElementById("login_tick");
  if (login_checkbox_tick() == 1) {
    if (ltick.checked == true) {
      ltick.checked = false;
    } else {
      ltick.checked = true;
    }
  } else {
    document.getElementById("login_tick").checked = false;
  }
}

// FUNCTION TO CHECK LOGIN BOX WHEN CLICK ON THEIR TEXT
function login_checkbox_tick() {
  let login_Email = document.getElementById("login_Email").value;
  let login_Password = document.getElementById("login_Password").value;
  let loginCheck = document.getElementById("login_tick");
  let loginTerms = document.getElementById("login_submit");

  if (login_Email == "" || login_Password == "") {
    alert("Make sure you have fill email & password");
    loginCheck.checked = false;
    loginTerms.checked = false;
    return 0;
  } else {
    //LOGIN TERMS & CONDITION
    if (loginTerms.disabled == true) {
      loginTerms.disabled = false;
    } else {
      loginTerms.disabled = true;
    }

    //CHECK CHANGE STATE OF CHECKBOX
    if (loginCheck.checked == true) {
      loginCheck.checked = false;
    } else {
      loginCheck.checked = true;
    }
    return 1;
  }
}

// FUNCTION TO SHOW PASSWORD IN READABLE FORMAT
function login_show_password_tick() {
  showPassword();
  let login_show_password_check = document.getElementById(
    "login_show_password_check"
  );
  if (login_show_password_check.checked == true) {
    login_show_password_check.checked = false;
  } else if (login_show_password_check.checked == false) {
    login_show_password_check.checked = true;
  }
}

// FUNCTIO FOR SHOW TOAST ON LOGIN SUCCESSFULL
function login_toast() {
  let login_Email = document.getElementById("login_Email").value;
  let login_Password = document.getElementById("login_Password").value;

  // LOGIN SUCCESSFULL POPUP BOX CENTER OF PAGE
  const Credentials = [
    `Email :- ${login_Email} \n Password :- ${login_Password}`,
  ];
  swal("Your Credentials!", `${Credentials}`, "success").then((value) => {
    window.location.reload();
  });

  // BOTTOM SUCCESSFUL MESSAGE
  let x = document.getElementById("snackbar_login");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// FUNCTION TO CHECK REGISATRATION CHECK BOX WHEN CLICK ON THEIR TEXT
function register_checkbox_tick() {
  let loginCheck1 = document.getElementById("register_tick");
  if (loginCheck1.checked == true) {
    loginCheck1.checked = false;
  } else if (loginCheck1.checked == false) {
    loginCheck1.checked = true;
  }
}

// function toast for registration successful
function registration_toast() {
  // Get the snackbar_registration DIV
  let x = document.getElementById("snackbar_registration");
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
