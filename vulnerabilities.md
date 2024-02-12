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
            padding: 50px;
            max-width: 600px;
        }
        table {
        margin: 0;
        padding: 0;
        width: 100%;
        }
        #fetchButton, #osFilter, #osDropdown {
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
    </style>
</head>

<body>
    <h1>Vulnerability Runtime</h1>
    <div id="osFilter">
        <label for="osDropdown">Select your operating system:</label>
        <select id="osDropdown">
            <option value="ubu20">Ubuntu</option>
            <option value="microsoft10">Microsoft Windows</option>
            <option value="googlechromebrowser">Google Chrome Browser</option>
            <option value="AppleMacOS13">Apple MacOS</option>
        </select>
        <button id="fetchButton">Fetch Info</button>
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
        console.log(url);

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








