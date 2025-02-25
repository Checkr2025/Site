window.onload = function () {
    if (sessionStorage.getItem("authenticated") !== "true") {
        alert("Access denied. Please log in first.");
        window.location.href = "about:none";
    }
};