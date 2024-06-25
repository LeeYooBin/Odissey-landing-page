const apodData = document.querySelector('.apod__data');
const apodDescription = document.querySelector('.apod__description');
const apodImage = document.querySelector('.apod__image');
const apodCopyright = document.querySelector('.apod__copyright');

const getApod = () => {
  fetch('https://api.nasa.gov/planetary/apod?api_key=Kpv3Rc478pRVtZWCC3bkX678ecFJc1yCVp18I5ro')
    .then(response => response.json())
    .then(response => {
      apodData.innerHTML = `${response.title} - ${response.date}`;
      apodCopyright.innerHTML = `Copyright: ${response.copyright}`;
      apodDescription.innerHTML = response.explanation;
      apodImage.src = response.url;
      apodImage.alt = `Astronomy Picture of the Day: ${response.title}`
    })
    .catch(e => console.log(e));
};

getApod();