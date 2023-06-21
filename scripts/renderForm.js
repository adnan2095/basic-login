document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('input_form.html');
  const htmlContent = await response.text();
  const container = document.getElementById('form_render');
  container.innerHTML = htmlContent;
});
