let showError = document.getElementById("showError");
let form = document.getElementById("form");
let details = document.getElementById("details");

showError.style.color = "red";
showError.style.display = "none";

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let errorText = "";

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    const userName = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Reset all field borders
    nameInput.style.border = "1.5px solid #b2dfdb";
    emailInput.style.border = "1.5px solid #b2dfdb";
    passwordInput.style.border = "1.5px solid #b2dfdb";

    // Validate name
    if (userName.length < 2) {
        errorText += "Name must be at least 2 characters long.<br>";
        nameInput.style.border = "1.5px solid red";
    }

    // Validate email
    if (!emailInput.checkValidity()) {
        errorText += "Please enter a valid email address.<br>";
        emailInput.style.border = "1.5px solid red";
    }

    // Validate password
    if (password.length < 8) {
        errorText += "Password must be at least 8 characters long.<br>";
        passwordInput.style.border = "1.5px solid red";
    }

    // Show errors if any
    if (errorText !== "") {
        showError.innerHTML = errorText;
        showError.style.display = "block";
        return;
    }

    // Hide error box
    showError.style.display = "none";

    // Mask password
    const maskedPassword = "*".repeat(password.length);

    // Display result
    details.innerHTML = `<hr><h2>Details:</h2><br>
        <strong>Name:</strong> ${userName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Password:</strong> ${maskedPassword}`;
    
    // Clear form
    form.reset();
    
    alert("Submitted successfully!");
});