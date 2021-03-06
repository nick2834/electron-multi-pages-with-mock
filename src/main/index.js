import {
  app,
  BrowserWindow,
  ipcMain
} from 'electron'
import {
  defaultConfig
} from './config'
import MainWindow from './main';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let loginWindow, mainWin;
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
    loginWindow.show();
    mainWin = new MainWindow();
  })

  loginWindow.on('closed', () => {
    loginWindow = null
  })
  // require('./main')
}

app.on('ready', createLoginWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
//此处判断二次点击是否重新创建窗口
app.on('activate', () => {  
  if (loginWindow == null) {
    mainWin.mainWindow ? mainWin.showMainWindow() : createLoginWindow()
  }
})


/**
 * 监听创建新窗口
 */
ipcMain.on('hideLoginWindow', (e) => {
  loginWindow.close()
})

ipcMain.on('showLoginWindow', () => {
  mainWin.closeMainWindow()
  createLoginWindow()
})
//显示主窗口
ipcMain.on('showMainWindow', () => {
  loginWindow.close()
  mainWin.showMainWindow()
})

// {
  //   isOpen: true,
  //   url: "adduser",
  //   options: {},
  //   data: {
  //     chatId: this.chatId
  //   }
  // };
ipcMain.on('showOrHideModal', (event, arg) => {
  mainWin.openOrCloseModal(arg)
})
//公告弹窗
ipcMain.on('showNotice',(event,arg) =>{
  console.error(arg)
  mainWin.openOrCloseNotice(arg)
})

ipcMain.on('close_login', () => {
  app.quit()
})