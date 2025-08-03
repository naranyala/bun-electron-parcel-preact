const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.argv.includes('--dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Load Parcel dev server in development, dist folder in production
  const url = isDev
    ? 'http://localhost:1234/'
    : `file://${path.join(__dirname, '../dist/index.html')}`;
  win.loadURL(url);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
