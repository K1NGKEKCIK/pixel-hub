const form = document.querySelector("#newsletter-form");
const statusMessage = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();

  statusMessage.textContent = `Спасибо! Адрес ${email} прошёл проверку.`;
  form.reset();
});