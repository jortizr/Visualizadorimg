//importamos el modulo nativo del api de node
import os from 'os'
window.addEventListener('load', () => {
  //document.getElementById('mensaje').innerHTML = 'Este es un mensaje insertado por JS'
  console.log(os.cpus())
})
