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
            <td>${church.description}</td>
            <td><a href="${church.website}" target="_blank">Website</a></td>
        `;
        tableBody.appendChild(tr);
    });
}

function filterChurches() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const churches = document.getElementsByClassName('church');

    for (let i = 0; i < churches.length; i++) {
        let h2 = churches[i].getElementsByTagName('h2')[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            churches[i].style.display = "";
        } else {
            churches[i].style.display = "none";
        }
    }
}