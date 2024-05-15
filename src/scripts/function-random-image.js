          document.addEventListener('DOMContentLoaded', function() {
            function updateBackgroundImage() {
              fetch('src/data/random-images.json')
                .then(response => response.json())
                .then(data => {
                  const images = data.images;
                  const randomImage = images[Math.floor(Math.random() * images.length)];
                  document.querySelector('.parallax').style.backgroundImage = `url(${randomImage})`;
                })
                .catch(error => console.error('Error loading the images:', error));
            }

            updateBackgroundImage(); // Initial call to set background
            setInterval(updateBackgroundImage, 9000); // Update every 9000 milliseconds (9 seconds)
          });