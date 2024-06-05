document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('portfolio-items');
    const posts = Array.from(container.querySelectorAll('a'));

    // Filter out any null elements just in case
    const validPosts = posts.filter(post => post.querySelector('.post-date') !== null);

    validPosts.sort((a, b) => {
        const dateA = new Date(Date.parse(a.querySelector('.post-date').innerText.trim()));
        const dateB = new Date(Date.parse(b.querySelector('.post-date').innerText.trim()));

        console.log('dateA:', dateA, 'dateB:', dateB); // Debugging line to check date parsing
        return dateB - dateA;
    });

    validPosts.forEach(post => {
        container.appendChild(post); // Reorder posts in the container
    });
});
