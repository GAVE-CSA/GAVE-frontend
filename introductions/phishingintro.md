---
layout: none
permalink: /phishingintro
---

{%- include gave-navbar.html -%}

<style>
    .slide-container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #333;
      text-align: center;
    }
    p {;
      text-align: center;
    }
    .box{
      width: 800px;
      height: auto;
      background-color: #b2a8f7;
      border-radius: 10px; /* Adjust the border-radius for rounded corners */
      padding: 20px;
      color: #fff; /* Set text color for better contrast */
      text-align: center;
      margin: 20px auto; /* Center the box horizontally */
    }

    li {
      text-align: left; /* Left-align the text within each list item */
      margin-left: 20px;
      margin-bottom: 10px; /* Optional: Add some spacing between list items */
    }

    .button-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

    .button {
    padding: .5rem 2rem;
    color: var(--white) !important;
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
}
  </style>

  <div class="slide-container">
  <h1>Understanding Phishing</h1>
  <br>
  <p>Phishing is a cybercrime where attackers deceive individuals into disclosing sensitive information, such as passwords or financial details, by pretending to be a trustworthy entity.</p>
  <br>
  <br>
  <h2>Common Phishing Tactics</h2>
  <div class="box">
    <ul>
    <li><strong>Email Spoofing:</strong> Attackers create emails that mimic legitimate sources to trick recipients.</li>
    <li><strong>Fake Websites:</strong> Cybercriminals design websites that look authentic to steal login credentials.</li>
    <li><strong>Social Engineering:</strong> Manipulating individuals through psychological tactics to divulge confidential information.</li>
    </ul>
  </div>

  <h2>How to Identify Phishing Attempts</h2>
  <div class="box">
    <ul>
        <li><strong>Unsolicited Emails:</strong> Be cautious of unexpected emails, especially those requesting personal information.</li>
        <li><strong>Generic Greetings:</strong> Legitimate organizations usually address you by your name, not with generic terms.</li>
        <li><strong>Urgent or Threatening Language:</strong> Phishers often create a sense of urgency to prompt immediate action.</li>
    </ul>
  </div>

  <h2>Preventing Phishing Attacks</h2>
  <div class="box">
    <ul>
        <li><strong>Verify Email Sources:</strong> Check the sender's email address to confirm its legitimacy.</li>
        <li><strong>Hover Over Links:</strong> Hover over links to preview the destination before clicking.</li>
        <li><strong>Use Multi-Factor Authentication (MFA):</strong> Adds an extra layer of security even if credentials are compromised.</li>
    </ul>
  </div>

  <div class="button-container">
    <a href="{{ site.baseurl }}/spotthediff" class="button">Continue to phishing game</a>
  </div>
</div>
