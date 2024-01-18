document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the Java backend endpoint
    fetch('/api/news')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming 'data' is an array of news items
            populateTable(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function populateTable(newsItems) {
    const table = document.getElementById('newsTable');
    const tbody = table.querySelector('tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with news items
    newsItems.forEach(item => {
        // Create a row for each news item
        const row = document.createElement('tr');

        // Construct table data for each attribute
        const titleCell = `<td>${item.title}</td>`;
        const descriptionCell = `<td>${item.description}</td>`;
        const sourceCell = `<td>${item.source}</td>`;
        // Add more cells as needed based on the API response structure

        // Set row's HTML and append it to the table body
        row.innerHTML = titleCell + descriptionCell + sourceCell;
        tbody.appendChild(row);
    });
}
