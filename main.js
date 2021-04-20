const {app, BrowserWindow} = require('electron')
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800
  })
  mainWindow.loadURL(process.env.PAN_HOME)
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
