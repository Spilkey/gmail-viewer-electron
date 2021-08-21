const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        icon:path.join(__dirname, 'gmail.png'),
        titleBarStyle: "hidden",
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'view/preload.js'),
          webviewTag: true
        }
    });
    win.removeMenu();
    win.loadFile('view/index.html');

}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})