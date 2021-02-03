const { BrowserWindow,ipcMain } = require('electron');
const cfg = require("./cfg");
const path = require("path");
const url = require("url");

var cache = {};

function fileUrl(name) {
    return url.format({
        protocol: 'file',
        slashes: true,
        pathname: path.join(`${__dirname}`,`../dict/${name}.html`)
    })
}

function window(name,width,height) {
    const mainWindow = BrowserWindow.getFocusedWindow();
    if(!mainWindow || !cache[name]){
        const win = new BrowserWindow({
            width: width,
            height: height,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.loadURL(fileUrl(name));
        if (cfg.debug) {
            win.webContents.openDevTools();
        }
        cache[name] = win.id;
    } else {
        BrowserWindow.fromId(cache[name]).show();
    }
    if (mainWindow) {
        mainWindow.hide();
    }
}


function loginWindow () {
    window("login",800,600)
}

function indexWindow () {
    window("index",800,600)
}


module.exports = {
    page:function(name){
        window(name,1100,800)
    },
    loginWindow:loginWindow
}