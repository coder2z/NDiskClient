const { app, BrowserWindow,ipcMain } = require('electron');
const  wins = require("./pkg/wins")


require("./pkg/ipcMain").register(ipcMain)

ipcMain.on("page",function (env,name) {
  wins.page(name)
});



app.whenReady().then(wins.loginWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});