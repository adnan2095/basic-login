document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("input_pass.html");
  const htmlContent = await response.text();
  const container = document.getElementById("password_field");
  container.innerHTML = htmlContent;
});
