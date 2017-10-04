import { app, BrowserWindow } from "electron";
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => (mainWindow = null));
}

app.on("ready", () => {
    createWindow();
});

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
});