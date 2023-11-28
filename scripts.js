document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');
    var learnMoreButton = document.getElementById('learnMore');
    var openPopupButton = document.getElementById('learnMore-4'); // Updated this line
    var popup = document.querySelector('.popup');

    window.addEventListener('scroll', function() {
        page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    learnMoreButton.addEventListener('click', function() {
        page.classList.add('blurFade');
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    openPopupButton.addEventListener('click', function() { // Add this block
        popup.classList.add('open');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});