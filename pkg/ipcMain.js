


function register(ipcMain){
    ipcMain.on('exper-action', (evidence, ...args) => {
        // ... 代表渲染器操作
        console.log(...args)
    });
}

module.exports = {
    register:register
}