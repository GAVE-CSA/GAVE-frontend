---
layout: none
permalink: /vulnerabilities
---

{%- include gave-navbar.html -%}

<html>

<head>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
        }
        h1 {
            margin-top: 50px;
            text-align: center;
        }
        #result {
            width: 90%;
            margin: 0 auto; /* Center the table */
        }
        #fetchButton {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <h1>Vulnerability Runtime</h1>
    <button id="fetchButton">Fetch Data</button>
    <div id="result"></div>
</body>

</html>

<script>
    document.getElementById('fetchButton').addEventListener('click', function() {
        const baseURL = "https://gave.stu.nighthawkcodingsociety.com/api/vulnerability/software";
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
            let table = "<table border='1'><tr><th>ID</th><th>Title</th><th>Severity</th><th>Description</th><th>Fix Text</th><th>Check Text</th></tr>";
            
            // Insert data into the table
            data.forEach(item => {
                table += `<tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.severity}</td>
                    <td>${item.description}</td>
                    <td>${item.fixtext}</td>
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








