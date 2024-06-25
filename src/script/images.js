const gallery = document.querySelector('.gallery__images-wrapper');

const getImages = () => {
  fetch(`https://pixabay.com/api/?key=39606993-6c3f7fa3e2976050a5f148778&q=dark+space&image_type=photo`)
    .then(response => response.json())
    .then(response => response.hits.slice(0, 18))
    .then(response => {
      response.forEach(hit => {
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = hit.webformatURL;
        img.alt = hit.tags;
        img.classList.add('gallery__image');
        a.href = hit.largeImageURL;
        a.target = '_blank';
        a.appendChild(img);
        gallery.appendChild(a);
      });
    })
    .catch(e => console.log(e));
}

getImages()