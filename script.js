document.getElementById('submitFilter').addEventListener('click', function() {
        let selectedCategory = document.getElementById('categorySelect').value;
        fetchData(selectedCategory);
    });
    
    document.getElementById('searchBox').addEventListener('keyup', function() {
        let searchValue = this.value.toLowerCase();
        let tableRows = document.querySelectorAll("#vulnerabilityTable tbody tr");
    
        tableRows.forEach(row => {
            let text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchValue) ? "" : "none";
        });
    });
    
    function fetchData(category) {
        let apiUrl = `http://localhost:8013/api/vulnerability/software/ubu20`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => populateTable(data))
            .catch(error => console.error('Error:', error));
    }
    
    function populateTable(data) {
        let tbody = document.querySelector("#vulnerabilityTable tbody");
        tbody.innerHTML = ''; // Clear existing data
    
        data.forEach(item => {
            let row = `<tr>
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
            tbody.innerHTML += row;
        });
    }