---
layout: none
permalink: /cybernews
---

{%- include gave-navbar.html -%}

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
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
    <input type="text" class="filter-input" id="categoryFilter" placeholder="Filter by Category">
    <input type="date" class="filter-input" id="dateFilter">
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

  <!-- Add more cards for additional articles -->

</div>

<script>
  function applyFilters() {
    // Get values from input fields
    var categoryFilter = document.getElementById("categoryFilter").value;
    var dateFilter = document.getElementById("dateFilter").value;

    // Implement your filtering logic here (e.g., show/hide cards based on filters)
    // For simplicity, the code below just logs the values, adjust as needed
    console.log("Category Filter:", categoryFilter);
    console.log("Date Filter:", dateFilter);
  }
</script>

</body>
</html>
