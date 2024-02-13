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
<div id="game-container">
  <h1>Email Phishing Game</h1>
  <br>
  <br>
  <p id="email-text"></p>
  <br>
  <br>
  <button class="button" onclick="checkAnswer(true)">Legitimate Email</button>
  <button class="button" onclick="checkAnswer(false)">Phishing Email</button>
  <br>
  <br>
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
    },
    {
      text: "Congratulations! You've won a prize. Click the link to claim: https://fakephishingsite.com/winner",
      isLegitimate: false
    },
    {
      text: "Important update: Your software requires an immediate update. Click the link to download: https://legitsoftwaredownload.com",
      isLegitimate: true
    },
    {
      text: "Account notification: Your account has been logged in from a new device. Verify your identity: https://fakephishingsite.com/verify",
      isLegitimate: false
    },
    {
      text: "Invoice: Your recent payment is successful. Here is your invoice: Invoice #789012",
      isLegitimate: true
    },
    {
      text: "Security Notice: Your password has expired. Click the link to change it: https://fakephishingsite.com/changepassword",
      isLegitimate: false
    }
  ];

  let currentLevel = 0;
  let correctAnswers = 0;

  // Function to shuffle the emails array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Shuffle the emails array
  shuffle(emails);

  function startGame() {
    if (currentLevel < 5) {
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
      <p>You completed the game with ${correctAnswers} correct answers out of 5 questions.</p>
    `;
  }

  // Start the game
  startGame();
</script>
