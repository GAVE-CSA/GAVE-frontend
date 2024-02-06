---
layout: none
permalink: /cybernews
---

{%- include gave-navbar.html -%}

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Security Education</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <h1>Educate yourself on configuration standards to minimize network-based attacks and learn about vulnerability patching!</h1>

    <h2> What are configuration standards?</h2>
    <p>Configuration standards are predefined guidelines and specifications for setting up and managing systems, software, or hardware components in a consistent manner. They are important as they ensure uniformity, reliability, and compatibility, making it easier to maintain, troubleshoot, and secure systems while minimizing errors and enhancing overall efficiency.</p>

</body>
</html>

<button id="fetchButton">Fetch Data</button>
<div id="result"></div>

# Question Runtime
<button id="fetchButton">Fetch Data</button>
<div id="result"></div>

<script>
    document.getElementById('fetchButton').addEventListener('click', function() {
        const baseURL = "https://gave.stu.nighthawkcodingsociety.com/api/questions/course";
        const course = "ubu20"; // Replace with the actual course value
        const url = `${baseURL}/${course}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Create a table
            let table = "<table border='1'><tr><th>ID</th><th>Question</th><th>Answer 1</th><th>Answer 2</th><th>Answer 3</th><th>Answer 4</th><th>Correct Answer</th><th>Difficulty</th><th>Unit</th><th>Points</th></tr>";
            
            // Insert data into the table
            data.forEach(item => {
                table += `<tr>
                    <td>${item.id}</td>
                    <td>${item.severity}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.iacontrols}</td>
                    <td>${item.ruleID}</td>
                    <td>${item.fixid}</td>
                    <td>${item.fixtext}</td>
                    <td>${item.checkid}</td>
                    <td>${item.checktext}</td>
                </tr>`;
            });

            table += "</table>";

            // Display the table
            document.getElementById('result').innerHTML = table;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('result').textContent = 'Error: ' + error.message;
        });
    });
</script>








