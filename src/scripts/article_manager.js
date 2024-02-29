document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/q1_24_articles.json')
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.getElementById('blog-posts');
            data.forEach((post, index) => {
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
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
        });
});