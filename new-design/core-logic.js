const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const planterSections = document.querySelectorAll('.planter-section h3');

    planterSections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('active');
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
        });
    });

    const footerLinks = [
        { text: "Home", href: "index.html" },
        { text: "Challenge", href: "the-challenge.html" },
        { text: "Total Christ Vision", href: "total-christ-vision.html" },
        { text: "Our Story", href: "our-story.html" },
        { text: "Get Involved", href: "get-involved.html"}
    ];

    // Function to populate footer links
    function populateFooterLinks() {
        const footerNav = document.getElementById('footer-nav');
        footerLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            footerNav.appendChild(anchor);
        });
    }

    // Function to populate top nav links
    function populateTopNavLinks() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.innerHTML = ''; // Clear existing links
        footerLinks.forEach(link => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.className = 'nav-link';
            anchor.textContent = link.text;
            li.appendChild(anchor);
            navMenu.appendChild(li);
        });
    }

    // Call the functions when the DOM is fully loaded
    populateFooterLinks();
    populateTopNavLinks();
});