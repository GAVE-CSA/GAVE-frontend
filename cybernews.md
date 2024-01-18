---
layout: none
baseurl: /cybernews
---

{%- include gave-navbar.html -%}

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NewsNow Data Display</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table id="newsTable">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Source</th>
                <!-- Add more columns as needed based on the API response -->
            </tr>
        </thead>
        <tbody>
            <!-- Rows will be dynamically inserted here -->
        </tbody>
    </table>

    <script src="script.js"></script>
</body>
</html>

