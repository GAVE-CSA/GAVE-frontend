---
layout: none
permalink: /vulnerabilities
---

{%- include gave-navbar.html -%}

<html>

<head>
    <style>
        .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 300px;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            margin-bottom: 0px;
            left: 100%;
            margin-left: -150px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        body,
        html {
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
        #fetchButton,
        #osFilter,
        #osDropdown {
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

<!-- <h1>Vulnerability Runtime</h1>
<button id="fetchButton">Fetch Data</button>
<div id="result"></div> -->

<body>
    <h1>Vulnerability Runtime</h1>
    <div id="osFilter">
        <label for="osDropdown">Filter by OS:</label>
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
        <button id="fetchButton">Fetch Data</button>
        <button id="fetchButton">Fetch Info</button>
    </div>
    <div id="result"></div>
</body>

</html>

<script>
    document.getElementById('fetchButton').addEventListener('click', fetchData);

    function fetchData() {
        const baseURL = "http://localhost:8013/api/vulnerability/software";
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

            // Add tooltips to the ID column
            addTooltipToIdColumn();
        })

        // Log and display an error message if there is a problem with the fetch operation
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('result').textContent = 'Error: ' + error.message;
        });
    }

    function addTooltipToIdColumn() {
        const idColumn = document.querySelectorAll('td:first-child');
        const titleColumn = document.querySelectorAll('td:nth-child(2)');
        const severityColumn = document.querySelectorAll('td:nth-child(3)');
        const descriptionColumn = document.querySelectorAll('td:nth-child(4)');
        const fixTextColumn = document.querySelectorAll('td:nth-child(5)');
        const checkTextColumn = document.querySelectorAll('td:nth-child(6)');



        idColumn.forEach((idCell) => {
            // Wrap the content of the ID cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const idContent = idCell.innerHTML;
            idCell.innerHTML = '';
            tooltipContainer.innerHTML = idContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'Description of ID goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the ID cell
            idCell.appendChild(tooltipContainer);
        });

        titleColumn.forEach((titleCell) => {
            // Wrap the content of the title cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const titleContent = titleCell.innerHTML;
            titleCell.innerHTML = '';
            tooltipContainer.innerHTML = titleContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'Description of title goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the title cell
            titleCell.appendChild(tooltipContainer);
        });

        severityColumn.forEach((severityCell) => {
            // Wrap the content of the severity cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const severityContent = severityCell.innerHTML;
            severityCell.innerHTML = '';
            tooltipContainer.innerHTML = severityContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'Description of severity goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the severity cell
            severityCell.appendChild(tooltipContainer);
        });

        descriptionColumn.forEach((descriptionCell) => {
            // Wrap the content of the description cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const descriptionContent = descriptionCell.innerHTML;
            descriptionCell.innerHTML = '';
            tooltipContainer.innerHTML = descriptionContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'Description of description goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the description cell
            descriptionCell.appendChild(tooltipContainer);
        });

        fixTextColumn.forEach((fixTextCell) => {
            // Wrap the content of the fixText cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const fixTextContent = fixTextCell.innerHTML;
            fixTextCell.innerHTML = '';
            tooltipContainer.innerHTML = fixTextContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'description of fixText goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the fixText cell
            fixTextCell.appendChild(tooltipContainer);
        });

        checkTextColumn.forEach((checkTextCell) => {
            // Wrap the content of the checkText cell with a tooltip container
            const tooltipContainer = document.createElement('div');
            tooltipContainer.className = 'tooltip';
            const checkTextContent = checkTextCell.innerHTML;
            checkTextCell.innerHTML = '';
            tooltipContainer.innerHTML = checkTextContent;

            // Create the tooltip text and append it to the tooltip container
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltiptext';
            tooltipText.textContent = 'description of checkText goes here.';
            tooltipContainer.appendChild(tooltipText);

            // Append the tooltip container to the checkText cell
            checkTextCell.appendChild(tooltipContainer);
        });
    }

</script>







