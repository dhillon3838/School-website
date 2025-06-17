document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "parent1" && password === "parent123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").textContent = "Invalid login credentials!";
  }
});
