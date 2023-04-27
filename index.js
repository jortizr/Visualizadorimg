"use strict";

//objeto app es el que maneja el ciclo de vida de la aplicacion
const { app, BrowserWindow } = require("electron");

//console.dir(app); para ver las propiedades de app

app.on('before-quit', () => {
    console.log('Saliendo del app...');
});
//para poder mostrar una ventana de windows
app.on('ready', () => {

    //creando una ventana con propiedades
    let win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            title: "Hola mundo!!",
            center: true,
            maximizable: false,
            show: false,
        }
    );
    
    //el evento once solo se ejecuta 1 vez y el on muchas veces
    win.once('ready-to-show', () => {
        win.show()
    });


    //evento mov, se ejecuta cada vez que se mueve la ventana
    win.on('move', () => {
        const position = win.getPosition();
        //console.log(`la posicion es ${position}`);
    });

    //podemos escuchar eventos
    win.on('closed', () => {
        win = null;
        app.quit();//para que no quede el objeto en memoria y cierre
    });

    //carga el url a la ventana, cuando es un archivo local
    //se usa el protocolo file
    //__dirname devuelve el nombre de la ruta actual del directorio
    win.loadURL(`file://${__dirname}/index.html`);
});

