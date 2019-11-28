import {
  app,
  BrowserWindow,
  ipcMain
} from 'electron'
import {
  defaultConfig
} from './config'
import MainWindow from './main copy';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let loginWindow;
const loginURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080/Login` :
  `file://${__dirname}/Login/index.html`

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    title: "登录",
    height: 320,
    width: 250,
    maximizable: false,
    minimizable: false,
    ...defaultConfig
  })

  loginWindow.loadURL(loginURL)

  loginWindow.on('ready-to-show', () => {
    loginWindow.show()
  })

  loginWindow.on('closed', () => {
    loginWindow = null
  })
  require('./main')
}

app.on('ready', createLoginWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
//此处判断二次点击是否重新创建窗口
app.on('activate', () => {
  if (loginWindow === null) {
    createLoginWindow()
  }
})


/**
 * 监听创建新窗口
 */
ipcMain.on('hideLoginWindow', (e) => {
  loginWindow.close()
})

ipcMain.on('showLoginWindow', (e) => {
  createLoginWindow()
})

ipcMain.on('close_login', () => {
  app.quit()
})