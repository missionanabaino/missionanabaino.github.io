document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/q1_24_articles.json')
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.getElementById('blog-posts');
            data.forEach((post, index) => {
                const postElement = document.createElement('article');
                postElement.id = `blog-post-${index}`; // Unique identifier for each post
                postElement.classList.add('blog-post'); // Class for styling
                postElement.innerHTML = `
                    <a href="${post.url}" class="post-link">
                        <div class="post-header">
                            <h2>${post.title}</h2>
                            <p>Published work by ${post.author}</p>
                        </div>
                        <div class="post-summary">
                            <p>${post.summary}</p>
                        </div>
                        <div class="post-footer">
                            <span class="button">Read More</span>
                        </div>
                    </a>
                `;
                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
        });
});