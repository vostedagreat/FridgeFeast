const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 30}ms">${letter}</span>`
    )
    .join("");
});
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;

  // Here you can implement your login logic, e.g. sending a request to the server with the provided credentials.

  console.log(`Username: ${username}, Password: ${password}`);
});