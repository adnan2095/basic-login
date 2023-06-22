document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('button.html');
    const htmlContent = await response.text();
    const container = document.getElementById('button_field');
    container.innerHTML = htmlContent;
  });
  