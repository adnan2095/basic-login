document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("input_fields.html");
  const htmlContent = await response.text();
  const container = document.getElementById("input_fields");
  container.innerHTML = htmlContent;
});
