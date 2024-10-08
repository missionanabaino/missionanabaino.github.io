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

    // Call the function when the DOM is fully loaded
    populateFooterLinks();
});