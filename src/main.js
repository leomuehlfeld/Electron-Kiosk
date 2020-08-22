const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    // size of app window
    width: 1024,
    height: 600,
    // kiosk "true" runs app on fullscreen without obstructions.
    kiosk: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('src/index.html')

  // line below enables DevTools
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
