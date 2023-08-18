import PanDulce from './Pan-Dulce.jpeg';
import panDulceAltText from './pan-dulce.txt';
function addImage() {
  const img = document.createElement('img');
  img.alt = panDulceAltText;
  img.width = 300;
  img.src = PanDulce;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;