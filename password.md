---
layout: none
permalink: /password
---

{%- include gave-navbar.html -%}

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Password Game</h2>
        <input type="text" id="passwordInput" placeholder="Enter your password" oninput="checkPassword()">
        <ul id="requirements">
            <li id="length">At least 8 characters</li>
            <li id="uppercase" style="display: none;">At least one uppercase letter</li>
            <li id="lowercase" style="display: none;">At least one lowercase letter</li>
            <li id="numbers" style="display: none;">At least one number</li>
            <li id="specialChars" style="display: none;">At least one special character</li>
        </ul>
    </div>
</body>
</html>

<style>
body {
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding-top: 50px;
}

.container {
    width: 300px;
    margin: 0 auto;
}

input, ul {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    text-align: left;
    margin-top: 5px;
}
</style>

<script>
function checkPassword() {
    var password = document.getElementById("passwordInput").value;

    // requirements
    var Length = password.length >= 8;
    var UpperCase = /[A-Z]/.test(password);
    var LowerCase = /[a-z]/.test(password);
    var Nums = /[0-9]/.test(password);
    var SpecialChars = /[\W_]/.test(password);

    // check each requirement
    if (Length) {
        document.getElementById("uppercase").style.display = "list-item";
        if (UpperCase) {
            document.getElementById("lowercase").style.display = "list-item";
            if (LowerCase) {
                document.getElementById("numbers").style.display = "list-item";
                if (Nums) {
                    document.getElementById("specialChars").style.display = "list-item";
                    if (SpecialChars) {
                        // All requirements met
                    }
                }
            }
        }
    } else {
        // if not met
        document.getElementById("uppercase").style.display = "none";
        document.getElementById("lowercase").style.display = "none";
        document.getElementById("numbers").style.display = "none";
        document.getElementById("specialChars").style.display = "none";
    }
}
</script>