//url para convertir el url en un array
import url from 'url'
import path from 'path'

window.addEventListener('load', () => {
  //document.getElementById('mensaje').innerHTML = 'Este es un mensaje insertado por JS'
  addImageEvents()
  searchImageEvent()
})

function addImageEvents (){
  //obtiene todos los elementos a alterar
  const thumbs = document.querySelectorAll('li.list-group-item')
  //recorrer agregando un evento
  for (var i = 0, length1 = thumbs.length; i < length1; i++){
    thumbs[i].addEventListener('click', function () {
      changeImage(this)
    })
  }

}

//funcion que cambia las imagenes y envia el id del elemento seleccionado
function changeImage(node) {
  document.querySelector('li.selected').classList.remove('selected')
  //ahora le pasamos el selected al elemento seleccionado
  node.classList.add('selected')
  //cambiamos la imagen del panel visor
  const image = document.getElementById('image-displayed')
    image.src = node.querySelector('img').src
    image.dataset.original = image.src
}

//creamos la funcion que escucha el evento keyup de input de search
function searchImageEvent() { 
  //obtenemos el input
  const searchBox = document.getElementById('search-box')
  //escuchamos el evento keyup
  searchBox.addEventListener('keyup', function() { 
    //ejecutamos el evento si esto es mayor que 0
    if (this.value.length > 0) {
      //si las imagenes de la vista cumplen la condicion
      //obtener todas las imagenes de la lista
      const thumbs = document.querySelectorAll('li.list-group-item img')
      //el for consigue todas las imagenes
      for (let i = 0, length1 = thumbs.length; i < length1; i++){
        const fileUrl = url.parse(thumbs[i].src) //obtiene es una url pero se convier
        //en un array
        //ahora conseguimos el nombre del archivo
        const fileName = path.basename(fileUrl.pathname) //importamos path
        console.log(fileName)
      }
    }
    
  })
  
}
