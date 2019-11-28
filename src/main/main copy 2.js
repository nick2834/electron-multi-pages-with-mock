import {
    app,
    BrowserWindow,
    ipcMain
} from 'electron'
import Modal from './modal'
import {
    defaultConfig
} from './config'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow, modalWin;
const mainURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080/Main` :
    `file://${__dirname}/Main/index.html`

function createMainWindow() {
    mainWindow = new BrowserWindow({
        height: 725,
        width: 1096,
        ...defaultConfig
    })

    mainWindow.loadURL(mainURL)

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        modalWin = new Modal(mainWindow)
    })

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}
/**
 * 监听创建新窗口
 */
ipcMain.on('showMainWindow', (event, arg) => {
    if (mainWindow) {
        if (mainWindow.isVisible()) {
            createMainWindow();
        } else {
            mainWindow.showInactive();
        }
    } else {
        createMainWindow();
    }
});

// 打开关闭模态窗
ipcMain.on('showOrHideModal', (event, arg) => {
    modalWin.showOrHideModal(arg)
});