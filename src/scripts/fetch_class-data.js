function fetchClassData() {
    fetch('../data/classes/classData.json')
        .then(response => response.json())
        .then(data => populateClasses(data))
        .catch(error => console.error('Error loading class data:', error));
}

function populateClasses(classData) {
    var classesContent = document.getElementById('classes-content');
    classData.forEach(function(cls) {
        var classColumn = document.createElement('div');
        classColumn.className = 'resource-column';
        classColumn.innerHTML = `
            <h3>${cls.title}</h3>
            <p>${cls.description}</p>
            <a href="#">Access Class</a>
        `;
        classesContent.querySelector('.resource-grid').appendChild(classColumn);
    });
}

document.addEventListener('DOMContentLoaded', fetchClassData);