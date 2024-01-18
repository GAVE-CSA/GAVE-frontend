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

        // Construct table data for each attribute (date, title, body, url, image, source)
        const dateCell = `<td>${item.date}</td>`;
        const titleCell = `<td>${item.title}</td>`;
        const bodyCell = `<td>${item.body}</td>`;
        const urlCell = `<td>${item.url}</td>`;
        const imageCell = `<td>${item.image}</td>`;
        const sourceCell = `<td>${item.source}</td>`;
        // Add more cells as needed based on the API response structure

        // Set row's HTML and append it to the table body
        row.innerHTML = dateCell + titleCell + bodyCell + urlCell + imageCell + sourceCell;
        tbody.appendChild(row);
    });
}
