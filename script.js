document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from your Java backend and populate the table
    // Example:
    // fetch('/your-java-backend-endpoint')
    //    .then(response => response.json())
    //    .then(data => populateTable(data));
});

function populateTable(data) {
    const table = document.getElementById('newsTable');
    const tbody = table.querySelector('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        // Assuming the data item has title, description, source properties
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>${item.source}</td>
        `;
        tbody.appendChild(row);
    });
}
