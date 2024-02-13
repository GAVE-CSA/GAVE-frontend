---
layout: none
permalink: /spotthediff
---

{%- include gave-navbar.html -%}

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    #game-container {
      margin: 50px;
    }
    #result {
      font-weight: bold;
      margin-top: 20px;
    }
    .button {
    padding: .5rem 2rem;
    color: var(--white) !important;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
}
  </style>
</head>
<body>

<div id="game-container">
  <h1>Email Phishing Game</h1>
  <br>
  <br>
  <p id="email-text"></p>
  <br>
  <button class="button" onclick="checkAnswer(true)">Legitimate Email</button>
  <button class="button" onclick="checkAnswer(false)">Phishing Email</button>
  <p id="result"></p>
</div>

<script>
  const emails = [
    {
      text: "Dear user, your account has been compromised. Click the link below to reset your password: https://fakephishingsite.com/reset",
      isLegitimate: false
    },
    {
      text: "Hello user, your recent purchase has been confirmed. If you did not make this purchase, please contact us immediately.",
      isLegitimate: true
    },
    {
      text: "URGENT: Your account will be suspended unless you verify your information. Click the link to proceed: https://fakephishingsite.com/verify",
      isLegitimate: false
    },
    {
      text: "Dear customer, thank you for your recent order. Here is your order confirmation: Order #123456",
      isLegitimate: true
    },
    {
      text: "Security Alert: Your account is at risk. Please log in to secure your account: https://fakephishingsite.com/login",
      isLegitimate: false
    }
  ];

  let currentLevel = 0;
  let correctAnswers = 0;

  function startGame() {
    if (currentLevel < emails.length) {
      document.getElementById("email-text").textContent = emails[currentLevel].text;
    } else {
      endGame();
    }
  }

  function checkAnswer(userResponse) {
    if (emails[currentLevel].isLegitimate === userResponse) {
      correctAnswers++;
    }

    currentLevel++;
    document.getElementById("result").textContent = "";
    startGame();
  }

  function endGame() {
    document.getElementById("game-container").innerHTML = `
      <h1>Game Over!</h1>
      <p>You completed the game with ${correctAnswers} correct answers out of ${emails.length} emails.</p>
    `;
  }

  // Start the game
  startGame();
</script>

</body>
