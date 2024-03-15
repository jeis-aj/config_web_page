document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // You can send username and password to the backend for authentication here
    // For simplicity, let's assume authentication is successful
    // Simulating backend response
    const authSuccess = true; // Replace this with actual response from the backend
    if (authSuccess) {
        document.getElementById("loginForm").reset();
        document.getElementById("configContainer").style.display = "block";
        // Add IP configuration options dynamically
        const ipConfig = document.getElementById("ipConfig");
        ipConfig.innerHTML = `
            <label for="ipAddress">IP Address:</label>
            <input type="text" id="ipAddress" placeholder="Enter IP Address">
            <label for="subnetMask">Subnet Mask:</label>
            <input type="text" id="subnetMask" placeholder="Enter Subnet Mask">
            <label for="gateway">Gateway:</label>
            <input type="text" id="gateway" placeholder="Enter Gateway">
        `;
    } else {
        alert("Invalid username or password");
    }
});

document.getElementById("dhcpToggle").addEventListener("change", function() {
    const ipConfig = document.getElementById("ipConfig");
    if (this.checked) {
        ipConfig.style.display = "none";
    } else {
        ipConfig.style.display = "block";
    }
});

