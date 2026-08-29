const blogList = document.querySelector('.blog-list');

fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    blogList.innerHTML = '';
    posts.forEach(post => {
      const item = document.createElement('div');
      item.className = "blog-item";
      item.innerHTML = `
        <div class="blog-details">
          <div>
            <div class="blog-title">${post.title}</div>
            <div class="blog-date">${post.date}</div>
            <div class="blog-description">${post.description}</div>
          </div>
          <div class="blog-resources">
            <a href="post.html?file=${post.slug}">Read More</a>
          </div>
        </div>
      `;
      blogList.appendChild(item);
    });
  });
