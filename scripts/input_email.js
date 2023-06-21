document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("input_email.html");
  const htmlContent = await response.text();
  const container = document.getElementById("email_field");
  container.innerHTML = htmlContent;
});
