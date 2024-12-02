document.getElementById("login-form").addEventListener("submit", function(event) {
    const role = document.querySelector('input[name="role"]:checked').value;
    if (role === "admin") {
        alert("Logging in as Admin...");
        window.location.href = "/admin-dashboard";  // Replace with actual URL
    } else {
        alert("Logging in as Passenger...");
        window.location.href = "/passenger-dashboard";  // Replace with actual URL
    }
    event.preventDefault();  // Prevents form submission for demonstration
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'search.html';
});

