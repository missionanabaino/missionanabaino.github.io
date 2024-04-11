document.addEventListener('DOMContentLoaded', function() {
    fetch('./src/data/media/ma_mediaCollection.json') // Updated path
        .then(response => response.json())
        .then(data => {
            const mediaGrid = document.querySelector('.media-grid');
            data.forEach(item => {
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.innerHTML = `
                    <a href="${item.url}" target="_blank">
                        <img src="${item.thumbnail}" alt="Media Thumbnail">
                        <p>${item.title}</p>
                    </a>
                `;
                mediaGrid.appendChild(mediaItem);
            });
        })
        .catch(error => console.error('Error loading media items:', error));
});