import {
    BrowserWindow
} from 'electron'
import {
    defaultConfig
} from './config'
export default class main {
    mainURL = process.env.NODE_ENV === 'development' ?
        `http://localhost:9080/Main` :
        `file://${__dirname}/Main/index.html`
    mainWindow = null
    constructor() {
        // this.createMainWindow()
    }
    createMainWindow() {
        this.mainWindow = new BrowserWindow({
            height: 725,
            width: 1096,
            ...defaultConfig
        })

        this.mainWindow.loadURL(this.mainURL)

        this.mainWindow.on('ready-to-show', () => {
            this.mainWindow.show()
        })

        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })
    }

    showMainWindow() {
        if (this.mainWindow) {
            if (this.mainWindow.isVisible()) {
                this.createMainWindow();
            } else {
                this.mainWindow.showInactive();
            }
        } else {
            this.createMainWindow();
        }
    }

    closeMainWindow() {
        this.mainWindow.close()
    }
}