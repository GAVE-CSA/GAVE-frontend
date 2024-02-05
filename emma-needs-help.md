---
layout: none
permalink: /cybernews
---

# Vulnerability Runtime
<button id="fetchButton">Fetch Data</button>
<div id="result"></div>

<script>
    document.getElementById('fetchButton').addEventListener('click', function() {
        const baseURL = "https://gave.stu.nighthawkcodingsociety.com/api/vulnerability/software";
        const category = "ubu20"; // Replace with the actual course value
        const url = `${baseURL}/${category}`;
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
            let table = "<table border='1'><tr><th>ID</th><th>Severity</th><th>Title</th><th>Description</th><th>IA Controls</th><th>Rule ID</th><th>Fix ID</th><th>Fix Text</th><th>Check ID</th><th>Check Text</th></tr>";
            
            // Insert data into the table!
            data.forEach(item => {
                table += `<tr>
                    <td>${item.id}</td>
                    <td>${item.severity}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.iacontrols}</td>
                    <td>${item.ruleid}</td>
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







