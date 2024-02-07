---
layout: none
permalink: /vulnerabilities
---

{%- include gave-navbar.html -%}

<html>

<head>
    <style>
        h1 {
            margin-top: 50px;
            text-align: center;
        }
        #result {
            /*margin-left: 20px;
            margin-right: 20px; */
            max-width: 92%; 
            margin: 0 auto;
        }
        #fetchButton {
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 10px 20px;
            font-size: 16px;
            border: 2px solid black;
            background-color: purple;
            color: white;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
        }
    </style>
</head>

<h1>Vulnerability Runtime</h1>
<button id="fetchButton">Fetch Data</button>
<div id="result"></div>

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








