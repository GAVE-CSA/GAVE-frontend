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
            <input id="logInPasswordInput" class="input" placeholder="Password">
        </div>
        <a href="/GAVE-frontend/signup">No account? Sign up here!<a>
        <br>
        <br>
        <div class="Buttons">
            <button class="logInButton" onclick="login_user()">Login</button>
        </div>
