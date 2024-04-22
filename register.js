async function signup() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let customer = { email: email, username: username, password: password };

    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    };

    try {
        let response = await fetch("https://test3-latest-cni3.onrender.com", request);//render link
        if (response.ok) {
            alert("Registration successful! You can now login.");
            location.href = "login.html";
        } else {
            // Handle server errors or other non-successful responses
            console.error("Registration failed:", response.statusText);
            alert("Registration failed. Please try again.");
        }
    } catch (error) {
        // Handle network errors
        console.error("Network error:", error);
        alert("An error occurred. Please try again later.");
    }
}
