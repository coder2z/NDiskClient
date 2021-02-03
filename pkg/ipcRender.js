const { ipcRenderer } = require('electron')


function send(channel,...args) {
    console.log("render",channel);
    return ipcRenderer.send(channel, ...args)
}

function on(channel ,...args) {
    ipcRenderer.on(channel, ...args)
}


module.exports = {
    send:send,
    on:on
};