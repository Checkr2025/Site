function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Credentials
    if (username === "Administrator Ndejje Senior Secondary School" && password === "@dminPazzw0rd123") {
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "submit.html";
    } else {
        alert("Invalid credentials. Try again.");
    }
}