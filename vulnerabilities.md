---
layout: none
permalink: /vulnerabilities
---

{%- include gave-navbar.html -%}

<html>

<head>
    <style>
        body, html {
            margin: 0;
            padding: 0;
        }
        h1 {
            margin-top: 50px;
            text-align: center;
        }
        #result {
            max-width: 600px;
            margin: 20px auto;
        }
        #fetchButton, #osFilter, #osDropdown, #submitButton {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 16px;
            border: 2px solid black;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
        }
        #fetchButton {
            background-color: purple;
            color: white;
        }
        #osFilter {
            text-align: center;
        }
        #osDropdown {
            width: 150px;
        }
        #submitButton {
            background-color: #27ae60;
            color: white;
        }
    </style>
</head>

<!-- <h1>Vulnerability Runtime</h1>
<button id="fetchButton">Fetch Data</button>
<div id="result"></div> -->

<body>
    <h1>Vulnerability Runtime</h1>
    <div id="osFilter">
        <label for="osDropdown">Filter by OS:</label>
        <select id="osDropdown">
            <option value="ubu20">Ubuntu</option>
            <option value="microsoft10">Microsoft Windows</option>
            <option value="googlechromebrowser">Google Chrome Browser</option>
            <option value="AppleMacOS13">Apple MacOS</option>
        </select>
        <button id="fetchButton">Fetch Data</button>
    </div>
    <div id="result"></div>
</body>

</html>

<script>
    document.getElementById('fetchButton').addEventListener('click', fetchData);
    function fetchData() {
        const baseURL = "https://gave.stu.nighthawkcodingsociety.com/api/vulnerability/software";
        const osDropdown = document.getElementById('osDropdown');
        const category = osDropdown.options[osDropdown.selectedIndex].value;
        console.log(category)
        const url = `${baseURL}/${category}`;

        // Fetch data from API 
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                // Check if the response from the server is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(data => {
                // Create an HTML table header
                let table = "<table border='1' cellspacing='3'><tr><th>ID</th><th>Title</th><th>Severity</th><th>Description</th><th>Fix Text</th><th>Check Text</th></tr>";

                // Insert data from the API into the table rows
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

                // Close the HTML table
                table += "</table>";

                // Display the generated table in the 'result' element
                document.getElementById('result').innerHTML = table;
            })

            // Log and display an error message if there is a problem with the fetch operation
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                document.getElementById('result').textContent = 'Error: ' + error.message;
            });
    }
</script>








