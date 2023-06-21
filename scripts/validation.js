function validate() {
  var email = document.loginform.email.value;
  var password = document.loginform.password.value;
  if (email == "test@gmail.com" && password == "123") {
    window.open("/src/portfolio.html");
  } else {
    alert("Invalid username or password");
    return false;
  }
}
