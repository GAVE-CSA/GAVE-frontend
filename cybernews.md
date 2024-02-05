---
layout: none
permalink: /emmaisbad
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
    
    <section>
        <h2>What are configuration standards?</h2>
        <p>Imagine you're building a sandwich. Each ingredient has a specific place and order – bread, lettuce, tomato, cheese, and so on. Now, let's say you share this sandwich recipe with your friends. The specific arrangement and types of ingredients represent your "configuration standards" for making the perfect sandwich.
        
        In a similar way, configuration standards in technology or any system are like a set of rules or guidelines that define how different components or settings should be arranged and interact. These standards help maintain consistency, ensure things work smoothly together, and make it easier for different people to understand and work with the system. Just like your friends following the sandwich recipe, anyone working with the system follows these configuration standards to ensure everything functions as intended</p>
    </section>

    <div id="filter">
        <select id="categorySelect">
            <option value="select">Select your operating system</option>
            <option value="ubuntu">Ubuntu</option>
            <option value="windows10">Microsoft Windows 10</option>
            <option value="server2012DC">Server 2012 Domain Controller</option>
            <option value="server2012R2DC">Server 2012/2012 R2 Domain Controller</option>
            <option value="word2016">Microsoft Word 2016</option>
            <option value="windowsServer2022">Microsoft Windows Server 2022</option>
            <option value="mongoDB">MongoDB Enterprise Advanced 4.x</option>
            <option value="chrome">Google Chrome Browser</option>
            <option value="firefox">Mozilla Firefox</option>
        </select>
        <button id="submitFilter">Submit</button>
    </div>

    <input type="text" id="searchBox" placeholder="Search vulnerabilities...">
    
    <table id="vulnerabilityTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Severity</th>
                <th>Title</th>
                <th>Description</th>
                <th>IA Controls</th>
                <th>Rule ID</th>
                <th>Fix ID</th>
                <th>Fix Text</th>
                <th>Check ID</th>
                <th>Check Text</th>
            </tr>
        </thead>
        <tbody>
            <!-- Data rows will be inserted here -->
        </tbody>
    </table>

    <script src="script.js"></script>
</body>
</html>



<!-- <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educate yourself in cybernews!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        .container {
            max-width: 600px;
            margin: auto;
        }

        h1 {
            text-align: center;
        }

        #generateButton {
            margin-top: 20px;
        }

        select {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Educate yourself in cybernews!</h1>

        <button id="generateButton">Generate</button>

        <select id="vulnerabilityCategory">
            <option value="">Select Category</option>
            <option value="Command_Execution">Command Execution</option>
            <option value="Buffer_Overflow">Buffer Overflow</option>
            <option value="Privilege_Escalation">Privilege Escalation</option>
            <option value="Information_Disclosure">Information Disclosure</option>
        </select>

        <table id="vulnerabilityTable">
            <thead>
                <tr>
                    <th>Vulnerability ID</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Article Content</th>
                    <th>Severity</th>
                    <th>Impact</th>
                </tr>
            </thead>
            <tbody>
                Table rows will be added dynamically from the backend API
            </tbody>
        </table>
    </div>

    <script>
        // Replace the following code with actual API calls to fetch data
        const backendData = [
            { id: 1, category: "Command_Execution", date: "2024-02-02", content: "Sample content", severity: "High", impact: "Critical" },
            // Add more data as needed
        ];

        const tableBody = document.querySelector('#vulnerabilityTable tbody');

        // Populate the table with data from the backend
        backendData.forEach(vulnerability => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vulnerability.id}</td>
                <td>${vulnerability.category}</td>
                <td>${vulnerability.date}</td>
                <td>${vulnerability.content}</td>
                <td>${vulnerability.severity}</td>
                <td>${vulnerability.impact}</td>
            `;
            tableBody.appendChild(row);
        });
    </script>
</body>
</html> -->


<!-- <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      justify-content: flex-start; /* Align to the left */
      align-items: center;
      min-height: 100vh;
      flex-direction: column;
    }

    .filters {
      display: flex;
      justify-content: center;
      align-items: center; /* Center items vertically */
      width: 100%;
      margin-bottom: 20px;
    }

    .filter-input {
      padding: 8px;
      margin-right: 10px;
      height: 50px; /* Set the same height for filter inputs */
    }

    .apply-filters-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      height: 50px; /* Set the same height for the apply filters button */
      background-color: #007BFF;
      color: #fff;
    }

    .card {
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
      width: 400px;
    }

    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-content {
      padding: 16px;
    }

    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .info {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }

    .description {
      font-size: 14px;
      color: #333;
    }

    .learn-more-btn {
      background-color: #007BFF;
      color: #fff;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      margin-top: 12px;
    }
  </style>
</head>
<body>

<div class="container">

  <div class="filters">
    <select class="filter-input" id="categoryFilter">
      <option value="">Select Category</option>
      <option value="Command_Execution">Command Execution</option>
      <option value="Buffer_Overflow">Buffer Overflow</option>
      <option value="Privilege_Escalation">Privilege Escalation</option>
      <option value="Information_Disclosure">Information Disclosure</option>
    </select>
    <button class="apply-filters-btn" onclick="applyFilters()">Apply Filters</button>
  </div>

  <div class="card">
    <img src="images/BSD.jpeg" alt="BSD Article Image">
    <div class="card-content">
      <div class="title">Guarding Against Threats: Understanding the Buffer Overflow in BSD's passwd</div>
      <div class="info">Date: 2008-09-05 | Category: Buffer Overflow</div>
      <div class="description">Buffer overflow in pswd in Berkeley Software Distribution based operating systems 4.3 and earlier allows local users to gain root privileges by specifying a long shell or General Electric Comprehensive Operating System field.</div>
      <button class="learn-more-btn" onclick="location.href='#'">Learn More</button>
    </div>
  </div>

</div>

<script>
  function applyFilters() {
    // Get values from the dropdown menu
    var categoryFilter = document.getElementById("categoryFilter").value;

    // Implement your filtering logic here (e.g., show/hide cards based on filters)
    // For simplicity, the code below just logs the values, adjust as needed
    console.log("Category Filter:", categoryFilter); 
  }
</script>

</body>
</html>
 -->


  
