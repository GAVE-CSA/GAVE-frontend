---
layout: none
permalink: /signup
---

{%- include gave-navbar.html -%}

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    
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

.signUpButton {
    padding: .5rem 2rem;
    color: var(--white) !important;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
}

.signUpButton:hover {
    background-color: var(--primary-color-dark);
}
</style>

<br>

<div class="container">
    <div class="card">
        <h3>Sign-Up</h3>
        <div class="Name">
            <input id="signUpNameInput" class="input" placeholder="Name">
        </div>
        <div class="Email">
            <input id="signUpEmailInput" class="input" placeholder="Email">
        </div>
        <div class="Password">
            <input id="signUpPasswordInput" type="password" class="input" placeholder="Password">
        </div>
        <div class="Dob">
            <input id="signUpDobInput" class="input" placeholder="Date of birth (MM-DD-YYYY)">
        </div>
        <div class="Buttons">
            <button class="signUpButton" onclick="signup_user()">Sign Up</button>
        </div>
    </div>
</div>

<script>
function signup_user() {
        var requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache'
        };

        let fetchName = document.getElementById("signUpNameInput").value;
        let fetchEmail = document.getElementById("signUpEmailInput").value;
        let fetchPassword = document.getElementById("signUpPasswordInput").value;
        let fetchDob = document.getElementById("signUpDobInput").value;

        let requestURL = `http://localhost:8013/api/person/post?email=${fetchEmail}&password=${fetchPassword}&name=${fetchName}&dob=${fetchDob}`;

        // let requestURL = `http://wsw.stu.nighthawkcodingsociety.com/api/person/post?email=${fetchEmail}&password=${fetchPassword}&name=${fetchName}&dob=${fetchDob}`;
        console.log(requestURL)

        fetch(requestURL, requestOptions)
        .then(response => {
                if (!response.ok) {
                    return response.text().then(errorMsg => {
                        alert('Error: ' + errorMsg);
                    });
                }
                // Success!!!
                alert("Signup Complete, proceed to login");
                window.location.href = "{{ site.baseurl }}/login";
                // Redirect to Database location
            })
            .catch(error => {
                alert('An unexpected error occurred: ' + error.message);
            });
    }
</script>