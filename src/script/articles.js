const articleWrapper = document.querySelector('.article-wrapper');

const getArticles = () => {
  const date = new Date();
  date.setDate(date.getDate() - 20);
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  fetch(`https://newsapi.org/v2/everything?q=astrophysics&from=${formattedDate}&sortBy=popularity&apiKey=b079cf0b604d4e65b995cd5b9c363147`)
    .then(response => response.json())
    .then(response => response.articles.slice(0, 30))
    .then(response => {
      response.forEach(article => {
        const element = document.createElement("a");
        element.innerHTML =  `
          <a 
            href="${article.url}" 
            class="articles__article"
            target="_blank"
          >
            <img class="article-image" src="${article.urlToImage}" alt="Article: ${article.title}">
            <div class="article-info">
              <h2 class="article-title">${article.title}</h2>
              <p class="article_author">${article.author}</p>
            </div>
          </a>
        `;
        articleWrapper.appendChild(element);
      });
    })
    .catch(e => console.log(e));
};

getArticles();