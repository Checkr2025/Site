function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Credentials
    if (username === "Administrator Ndejje Senior Secondary School" && password === "@dminPazzw0rd123") {
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdCZbM1fX4Xqn74qdFfeYlpGTg7AhJT3GEoBPo6Gz_LTZahfQ/viewform?usp=sharing";
    } else {
        alert("Invalid credentials. Try again.");
    }
}