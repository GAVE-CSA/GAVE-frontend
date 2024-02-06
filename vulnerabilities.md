---
layout: none
permalink: /cybernews
---

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








