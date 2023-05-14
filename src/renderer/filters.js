function applyFilter(filter, currentImage) {
  //crea un objeto de tipo imagen
  let imgObj = new Image(); // eslint-disable-line
  //obtiene la url de la imagen
  imgObj.src = currentImage.src;
  //importa la imagen de la promesa y le aplica el filtro
  filterous.importImage(imgObj, {}) // eslint-disable-line
    .applyInstaFilter(filter)
    .renderHtml(currentImage);
}

module.exports = applyFilter;
