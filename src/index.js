const{app,BrowserWindow,Menu} = require('electron');
const url = require('url');
const path = require('path');
const { electron } = require('process');

if(process.env.NODE_ENV !=='production'){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'../node_modules','.bin','electron')
    })
}

let mainWindow

let newUserWindows


app.on('ready', () => {
    mainWindow = new BrowserWindow({});
  
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));

   const mainMenu =  Menu.buildFromTemplate(templateMneu);
   Menu.setApplicationMenu(mainMenu)
  });

function createNewUserWindows(){
   newUserWindows = new BrowserWindow({
        width:400,
        height:300,
        title:'Agregar nuevo usuario'
    });
    newUserWindows.setMenu(null);
    newUserWindows.loadFile(path.join(__dirname,'views/adduser.html'));
}








  const templateMneu = [
    {
        label: 'File',
        submenu:[
            {
                label:'Nuevo Usuario',
                accelerator:'Ctrl+N',
                click(){
                    createNewUserWindows();
                }
            }
        ]
    }

  ];