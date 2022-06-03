function login() {
  document.getElementById("login_form").style.left = "90px";
  document.getElementById("registration_form").style.left = "650px";
  document.getElementById("navbar").style.left = "0px";
  document.getElementById("login_boy").style.display = "block";
  document.getElementById("signup_boy").style.display = "none";
}

function register() {
  document.getElementById("login_form").style.left = "-300px";
  document.getElementById("registration_form").style.left = "10px";
  document.getElementById("navbar").style.left = "110px";
  document.getElementById("login_boy").style.display = "none";
  document.getElementById("signup_boy").style.display = "block";
}

function check_term_condition() {
    
}