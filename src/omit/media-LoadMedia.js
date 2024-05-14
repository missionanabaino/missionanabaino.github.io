document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/media/ma_mediaCollection.json')
        .then(response => response.json())
        .then(data => {
            const mediaGrid = document.querySelector('.media-grid');
            data.forEach(item => {
                const videoUrl = item.url;
                const embedUrl = `https://www.youtube.com/embed/${videoUrl.split('v=')[1].split('&')[0]}`;

                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.innerHTML = `
                    <iframe src="${embedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>${item.title}</p>
                `;
                mediaGrid.appendChild(mediaItem);
            });
        })
        .catch(error => console.error('Error loading media items:', error));
});

