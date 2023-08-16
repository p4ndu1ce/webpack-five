import PanDulce from './Pan-Dulce.jpeg';
function addImage() {
  const img = document.createElement('img');
  img.alt = 'Pan dulce';
  img.width = 300;
  img.src = PanDulce;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;