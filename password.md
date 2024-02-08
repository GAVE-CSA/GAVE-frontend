---
layout: none
permalink: /password
---

{%- include gave-navbar.html -%}

<html>
<body>
    <div class="container">
        <h2>Password Game</h2>
        <button id="start_button" class="select_button" onclick="startGame()">Start</button>
        <div id="play_container" class="play_container" style="display:none">
            <input type="text" id="passwordInput" placeholder="Enter your password">
            <button id="check_button" class="check_button" onclick="checkPassword()">Check</button>
            <ul id="requirements">
                <li id="length">At least 8 characters</li>
                <li id="uppercase" style="display:none;">At least one uppercase letter</li>
                <li id="lowercase" style="display:none;">At least one lowercase letter</li>
                <li id="numbers" style="display:none;">At least one number</li>
                <li id="specialChars" style="display:none;">At least one special character</li>
            </ul>
            <div id="timerDisplay" style="font-size: 24px; margin: 20px;">0:00</div>
        </div>
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
    var timeSet;
    var constant = 0;
    var seconds = 0;
    var mintues = 0;

     function incrementTime() {
        constant++; //constant second count separate from seconds
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        // update time display on page
        document.getElementById("timerDisplay").innerText = minutes + ":" +(seconds < 10 ? "0":"") + seconds;
    };

    function startTimer() {
        seconds = 0;
        minutes = 0;
        constant = 0;
        timeSet = setInterval(incrementTime, 1000);
    }

    function stopTimer() {
        clearInterval(timeSet);
        // alert display final time
        alert("Time: " + minutes + ":" + (seconds < 10 ? "0":"") + seconds);

    }

    const playContainer = document.getElementById("play_container");
    const startButton = document.getElementById("start_button");
    const checkButton = document.getElementById("check_button");
    
    const timerDisplay = document.getELementById("timerDisplay");

    function startGame() {
        startTimer();
        playContainer.style = "display:block;";
        startButton.style = "display:none;";
    }

    function checkPassword() {
        var password = document.getElementById("passwordInput").value;

        // requirements w/ condition and element id
        var requirements = [
            {condition: password.length >= 8, elementId: "length"},
            {condition: /[A-Z]/.test(password), elementId: "uppercase"},
            {condition: /[a-z]/.test(password), elementId: "lowercase"},
            {condition: /[0-9]/.test(password), elementId: "numbers"},
            {condition: /[\W_]/.test(password), elementId: "specialChars"}
        ];

        // hide all requirments except first
        requirements.forEach((req, index) => {
            if(index > 0) { 
                document.getElementById(req.elementId).style.display = "none";
            }
        });

        // loop each requirement
        var allMet = true;
        for (var i = 0; i < requirements.length; i++) {
            var req = requirements[i];
            if (req.condition) {
                document.getElementById(req.elementId).style.display = "list-item"; // show requirement
                document.getElementById(req.elementId).style.color = "green"; // green if requirement met
                // show next requirement if there is another
                if (i + 1 < requirements.length) {
                    document.getElementById(requirements[i + 1].elementId).style.display = "list-item";
                }
            } else {
                document.getElementById(req.elementId).style.color = "red"; // red if requirement is not met
                allMet = false; // allMet set false if not all requirements met
                break; // exit loop bc found requirement that's not met
            }
        }
        // if all requirements are met
        if (allMet) {
            stopTimer();
        }
    }
</script>