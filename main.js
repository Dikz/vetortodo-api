const {app, BrowserWindow} = require('electron')
const server = require('./server')

let mainWindow

function createWindow () {
  server.init()
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
		},
		show: false
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
