document.addEventListener('DOMContentLoaded', function() {
    const typeCheckboxes = document.querySelectorAll('input[name="type"]');
    const topicCheckboxes = document.querySelectorAll('input[name="topic"]');
    const speakerCheckboxes = document.querySelectorAll('input[name="speaker"]');
    const searchInput = document.querySelector('.search-input'); // Fetch the search input

    function fetchAndDisplayArticles() {
        fetch('../data/q1_24_articles.json')
            .then(response => response.json())
            .then(data => {
                let filteredData = data.filter(article => {
                    // Adjusting for case-insensitive comparison and matching JSON structure
                    const typeMatch = Array.from(typeCheckboxes).filter(cb => cb.checked).map(cb => cb.value).some(type => article.types.map(t => t.toLowerCase()).includes(type.toLowerCase()));
                    const topicMatch = Array.from(topicCheckboxes).filter(cb => cb.checked).map(cb => cb.value).some(topic => article.topics.map(t => t.toLowerCase()).includes(topic.toLowerCase()));
                    const speakerMatch = Array.from(speakerCheckboxes).filter(cb => cb.checked).map(cb => cb.value.replace('_', ' ')).some(speaker => article.speakers.map(s => s.toLowerCase()).includes(speaker.toLowerCase()));

                    return (typeMatch || !Array.from(typeCheckboxes).some(cb => cb.checked)) &&
                           (topicMatch || !Array.from(topicCheckboxes).some(cb => cb.checked)) &&
                           (speakerMatch || !Array.from(speakerCheckboxes).some(cb => cb.checked));
                });

                // Search functionality
                const searchQuery = searchInput.value.toLowerCase();
                if (searchQuery) {
                    filteredData = filteredData.filter(article => 
                        article.title.toLowerCase().includes(searchQuery) ||
                        article.summary.toLowerCase().includes(searchQuery) ||
                        article.author.toLowerCase().includes(searchQuery) ||
                        article.topics.some(topic => topic.toLowerCase().includes(searchQuery))
                    );
                }

                displayArticles(filteredData);
            })
            .catch(error => {
                console.error('Error loading blog posts:', error);
            });
    }

    function displayArticles(articles) {
        const blogPostsContainer = document.getElementById('blog-posts');
        blogPostsContainer.innerHTML = ''; // Clear existing articles
        articles.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.id = `blog-post-${index}`; // Unique identifier for each post
            postElement.classList.add('blog-post'); // Class for styling
            postElement.style.width = '100%'; // Ensure full screen width
            postElement.innerHTML = `
                <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <img src="${post.featuredImage}" alt="Featured Image" style="max-width: 100%; height: auto;">
                    <div class="post-content" style="text-align: center;">
                        <h2>${post.title}</h2>
                        <p>Published work by ${post.author}</p>
                        <div class="post-summary">
                            <p>${post.summary}</p>
                        </div>
                        <a href="${post.url}" class="button" style="text-decoration: none; color: inherit;">Read More</a>
                    </div>
                </div>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    // Initial fetch and display
    fetchAndDisplayArticles();

    // Add event listeners to checkboxes and search input to refetch and display articles on change
    [...typeCheckboxes, ...topicCheckboxes, ...speakerCheckboxes].forEach(checkbox => {
        checkbox.addEventListener('change', fetchAndDisplayArticles);
    });

    // Event listener for the search input
    searchInput.addEventListener('input', fetchAndDisplayArticles);
});