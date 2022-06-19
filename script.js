const first_name = document.getElementById("f-name");
const last_name = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const error_first_name = document.getElementById("first_name_err");
const error_last_name = document.getElementById("last_name_err");
const error_email = document.getElementById("email_err");
const error_password = document.getElementById("password_err");
const button = document.getElementById("button");
const fn_img = document.querySelector("#fn_err_img");
const ln_img = document.querySelector("#ln_err_img");
const em_img = document.querySelector("#em_err_img");
const pd_img = document.querySelector("#pd_err_img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (first_name.value === "") {
    error_first_name.innerHTML = "First Name cannot be empty";
    error_first_name.style.color = "red";
    first_name.style.border = "1px solid red";
    fn_img.style.display = "block";
  } else {
    error_first_name.innerHTML = "";
    first_name.style.border = "1px solid #ccc";
    fn_img.style.display = "none";
  }

  //validate last name

  if (last_name.value === "") {
    error_last_name.innerHTML = "Last Name cannot be empty";
    error_last_name.style.color = "red";
    last_name.style.border = "1px solid red";
    ln_img.style.display = "block";
  } else {
    error_last_name.innerHTML = "";
    last_name.style.border = "1px solid #ccc";
    ln_img.style.display = "none";
  }

  //validate email
  if (email.value === "") {
    error_email.innerHTML = "Looks like this is not an email";
    document.getElementsByName('email') [0].placeholder = "email@example/com";
    error_email.style.color = "red"; 
    email.style.border = "1px solid red";
    em_img.style.display = "block";
  } else {
    document.getElementsByName('email') [0].placeholder = "Email Address";
    error_email.innerHTML = "";
    email.style.border = "1px solid #ccc";
    em_img.style.display = "none";
  }

  //validate password
  if (password.value === "") {
    error_password.innerHTML = "Password cannot be empty";
    error_password.style.color = "red";
    password.style.border = "1px solid red";
    pd_img.style.display = "block";
  } else if (password.value.length < 6) {
    error_password.innerHTML = "Password must be at least 6 characters";
    error_password.style.color = "red";
    password.style.border = "1px solid red";
    pd_img.style.display = "block";
  } else {
    error_password.innerHTML = "";
    password.style.border = "1px solid #ccc";
    pd_img.style.display = "none";
  }
});
