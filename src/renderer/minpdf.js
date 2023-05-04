// Obtener el enlace al PDF
const pdfLink = "http://200.69.100.66/VerGuias/DRIVEy/pod/G230421/014126393757.pdf";

// Cargar el PDF utilizando pdf.js
pdfjsLib.getDocument(pdfLink).promise.then(function(pdf) {

  // Obtener la primera página del PDF
  pdf.getPage(1).then(function(page) {

    // Crear un canvas para renderizar la miniatura
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const viewport = page.getViewport({scale: 0.5});
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Renderizar la página del PDF en el canvas
    const renderTask = page.render({canvasContext: ctx, viewport: viewport});
    renderTask.promise.then(function() {

      // Convertir el canvas a una imagen
      const thumbnailImage = new Image();
      thumbnailImage.src = canvas.toDataURL();

      // Agregar la imagen de la miniatura al contenedor HTML
      const thumbnailContainer = document.getElementById("thumbnail");
      thumbnailContainer.appendChild(thumbnailImage);
    });
  });
});