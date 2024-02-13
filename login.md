---
layout: none
permalink: /login
---

{%- include gave-navbar.html -%}

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    
.card2 {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    animation: fade1 5s ease infinite; // change here
}

h3 {
    margin-bottom: 20px;
}

.input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}
}

.logInButton {
    padding: .5rem 2rem;
    color: var(--white) !important;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
}

.logInButton:hover {
    background-color: var(--primary-color-dark);
}
</style>


<div class="container">
    <div class="card">
        <h3>Login</h3>
        <div class="Email">
            <input id="logInEmailInput" class="input" placeholder="Email">
        </div>
        <div class="Password">
            <input type="password" id="logInPasswordInput" class="input" placeholder="Password">
        </div>
        <a href="{{ site.baseurl }}/signup">No account? Sign up here!<a>
        <br>
        <br>
        <div class="Buttons">
            <button class="logInButton" onclick="login_user()">Login</button>
        </div>

<script>
    function login_user() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": document.getElementById("logInEmailInput").value,
            "password": document.getElementById("logInPasswordInput").value

            // For quick testing
            //"email": "toby@gmail.com",
            //"password": "123Toby!"
        });
        console.log(raw);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            credentials: 'include',  // Include this line for cross-origin requests with credentials
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8013/authenticate", requestOptions)
        .then(response => {
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);

                switch (response.status) {
                    case 401:
                        alert("Incorrect username or password");
                        break;
                    case 403:
                        alert("Access forbidden. You do not have permission to access this resource.");
                        break;
                    case 404:
                        alert("User not found. Please check your credentials.");
                        break;
                    // Add more cases for other status codes as needed
                    default:
                        alert("Login failed. Please try again later.");
                }

                return Promise.reject('Login failed');
            }
            return response.text()
        })
        .then(result => {
            console.log(result);
            window.location.href = "{{ site.baseurl }}/profile";
        })
        .catch(error => console.error('Error during login:', error));

    }

</script>
