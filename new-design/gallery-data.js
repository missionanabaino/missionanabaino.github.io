document.addEventListener('DOMContentLoaded', function() {
    fetch('gallery-data.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('rotating-gallery');
            let currentIndex = 0;

            function showImage(index) {
                const image = data.gallery[index];
                gallery.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            }

            function rotateImage() {
                currentIndex = (currentIndex + 1) % data.gallery.length;
                showImage(currentIndex);
            }

            showImage(currentIndex);
            setInterval(rotateImage, 3000); // Rotate every 5 seconds
        })
        .catch(error => console.error('Error loading gallery data:', error));
});