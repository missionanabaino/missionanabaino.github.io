document.addEventListener('DOMContentLoaded', function() {
    fetch('gallery-data.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('rotating-gallery');
            let currentIndex;

            function showImage(index) {
                const image = data.gallery[index];
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.style.opacity = 0;
                gallery.innerHTML = '';
                gallery.appendChild(imgElement);
                fadeIn(imgElement);
            }

            function fadeIn(element) {
                let opacity = 0;
                const timer = setInterval(function() {
                    if (opacity >= 1) {
                        clearInterval(timer);
                        setTimeout(() => fadeOut(element), 5000); // Start fade out after 2 seconds
                    }
                    element.style.opacity = opacity;
                    opacity += 0.1;
                }, 50);
            }

            function fadeOut(element) {
                let opacity = 1;
                const timer = setInterval(function() {
                    if (opacity <= 0) {
                        clearInterval(timer);
                        rotateImage();
                    }
                    element.style.opacity = opacity;
                    opacity -= 0.1;
                }, 50);
            }

            function rotateImage() {
                currentIndex = (currentIndex + 1) % data.gallery.length;
                showImage(currentIndex);
            }

            // Start with a random image
            currentIndex = Math.floor(Math.random() * data.gallery.length);
            showImage(currentIndex);
        })
        .catch(error => console.error('Error loading gallery data:', error));
});