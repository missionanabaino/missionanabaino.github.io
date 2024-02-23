document.addEventListener('DOMContentLoaded', function() {
    fetch('churches.json')
        .then(response => response.json())
        .then(data => populateChurches(data))
        .catch(error => console.error('Error loading church data:', error));
});

function populateChurches(churches) {
    const tableBody = document.querySelector('#churchCollection tbody');
    tableBody.innerHTML = ''; // Clear existing entries
    churches.forEach(church => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${church.name}</td>
            <td>${church.region}</td>
            <td>${church.location}</td>
            <td>${church.yearFounded}</td>
            <td><a href="${church.website}" target="_blank">Website</a></td>
        `;
        tableBody.appendChild(tr);
    });
}

function filterChurches() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('churchCollection');
    const tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
        // Assuming the church name is in the first <td> of each row
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
