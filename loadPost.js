const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('file');

    if (postSlug) {
      fetch(`posts/${postSlug}.md`)
        .then(response =>  {
          if (!response.ok) throw new Error('Post not found');
          return response.text();
        })
        .then(markdownText => {
          document.getElementById('markdown-content').innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
          document.getElementById('markdown-content').innerHTML = "<p> Error :(</p>"
        });
    }
