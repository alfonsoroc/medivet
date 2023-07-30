const{app,BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow


app.on('ready', () => {
    mainWindow = new BrowserWindow({});
  
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
  });