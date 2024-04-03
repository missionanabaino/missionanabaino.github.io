document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/copy/about-page.json')
        .then(response => response.json())
        .then(data => {
            // Set the title and description
            document.title = data.title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) metaDescription.setAttribute("content", data.description);

            // Populate sections
            const subNav = document.querySelector('.sub-header-nav');
            subNav.innerHTML = ''; // Clear existing content
            data.sections.forEach(section => {
                const button = document.createElement('button');
                button.textContent = section.title;
                const link = document.createElement('a');
                link.href = `#${section.id}`;
                link.appendChild(button);
                subNav.appendChild(link);

                // Populate section content
                const sectionElement = document.getElementById(section.id);
                if (sectionElement) {
                    sectionElement.innerHTML = `
                        <h2>${section.title}</h2>
                        <p>${section.content}</p>
                    `;
                }
            });

            // Populate call to action
            const cta = document.querySelector('#unique-cta .cta-content');
            if (cta) {
                cta.querySelector('h2').textContent = data.callToAction.title;
                cta.querySelector('p').textContent = data.callToAction.description;
                const buttonsContainer = cta.querySelector('.cta-buttons');
                buttonsContainer.innerHTML = ''; // Clear existing buttons
                data.callToAction.buttons.forEach(button => {
                    const a = document.createElement('a');
                    a.href = button.link;
                    a.className = 'cta-button';
                    a.textContent = button.text;
                    buttonsContainer.appendChild(a);
                });
            }
        })
        .catch(error => console.error('Error loading about page content:', error));
});