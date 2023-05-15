import { ipcRenderer } from 'electron';

//se esta escuchando un evento pong
function setIpc() {
    ipcRenderer.on('asynchronous-message', (event, arg) => { 
        console.log(`pong recibido - ${arg}`);
    })
}

//vamos a mandar un evento cuando le de click
function sendIpc() {
    //se envia el ping al proceso principal
    ipcRenderer.send('ping', new Date())
}

//exportamos los modulos
module.exports = {
    setIpc: setIpc,
    sendIpc: sendIpc
}