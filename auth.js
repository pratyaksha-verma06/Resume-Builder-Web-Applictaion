// SIGNUP
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    const user = { email, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "index.html";
}


// LOGIN
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "builder.html";
    } else {
        alert("Invalid credentials");
    }
}


// PROTECT PAGE
function checkAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
    }
}


// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}