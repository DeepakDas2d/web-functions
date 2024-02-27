function toogleShowPassword() {
  let password = document.getElementById("password");

  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
}
