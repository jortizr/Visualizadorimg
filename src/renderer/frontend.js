//url para convertir el url en un array
import url from "url";
import path from "path";

window.addEventListener("load", () => {
  //document.getElementById('mensaje').innerHTML = 'Este es un mensaje insertado por JS'
  addImageEvents();
  searchImageEvent();
});

function addImageEvents() {
  //obtiene todos los elementos a alterar
  const thumbs = document.querySelectorAll("li.list-group-item");
  //recorrer agregando un evento
  for (var i = 0, length1 = thumbs.length; i < length1; i++) {
    thumbs[i].addEventListener("click", function () {
      changeImage(this);
    });
  }
}

//funcion que cambia las imagenes y envia el id del elemento seleccionado
function changeImage(node) {
  document.querySelector("li.selected").classList.remove("selected");
  //ahora le pasamos el selected al elemento seleccionado
  node.classList.add("selected");
  //cambiamos la imagen del panel visor
  const image = document.getElementById("image-displayed");
  image.src = node.querySelector("img").src;
  image.dataset.original = image.src;
}

//creamos la funcion que escucha el evento keyup de input de search
function searchImageEvent() {
  //obtenemos el input
  const searchBox = document.getElementById("search-box");
  //escuchamos el evento keyup
  searchBox.addEventListener("keyup", function () {
    //creamos una expresion regular para validar si lo del input cumple
    //con la condicion //this.value valor de la caja de texto
    const regex = new RegExp(this.value.toLowerCase(), "gi");
    console.log(this.value.length);
    //ejecutamos el evento si esto es mayor que 0
    if (this.value.length > 0) {
      //si las imagenes de la vista cumplen la condicion
      //obtener todas las imagenes de la lista
      const thumbs = document.querySelectorAll("li.list-group-item img");
      //el for consigue todas las imagenes
      for (let i = 0, length1 = thumbs.length; i < length1; i++) {
        const fileUrl = url.parse(thumbs[i].src); //obtiene es una url pero se convier
        //en un array
        //ahora conseguimos el nombre del archivo
        const fileName = path.basename(fileUrl.pathname); //importamos path
        //se valida si el nombre cumple con el de los archivo
        if (fileName.match(regex)) {
          //si es asi lo hacemos visible
          thumbs[i].parentNode.classList.remove("hidden");
          selectFirstImage();
        } else {
          //sino agregamos la clase hidden para hacerla invisible
          thumbs[i].parentNode.classList.add("hidden");
        }
      }
    } else {
       //buscar todos los nodos ocultos que tienen class li y hidden
       const hidden = document.querySelectorAll('li.hidden')
      
      for (let i = 0, length1 = hidden.length; i < length1; i++) {
        //itera sobre los nodos hidden
        //accedemos a la class de cada nodo
        hidden[i].classList.remove("hidden")
      }
    }

  });
}

//funcion que selecciona la primera imagen actual y seleccionada
function selectFirstImage() {
  //obtenemos todas las imagenes
  const thumbs = document.querySelector("li.list-group-item:not(.hidden)");
  changeImage(thumbs);
}
