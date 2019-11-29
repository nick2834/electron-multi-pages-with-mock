import {
    BrowserWindow
} from 'electron'
import {
    defaultConfig
} from './config'
import Modal from './modal'
export default class main {
    mainURL = process.env.NODE_ENV === 'development' ?
        `http://localhost:9080/Main` :
        `file://${__dirname}/Main/index.html`
    mainWindow = null;
    modalWin = null;
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
            this.modalWin = new Modal({
                parent: this.mainWindow,
                // width: 520,
                // height:476,
                // modal: false,
                // movable: true,
            }, '')
        })

        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })
    }

    showMainWindow() {
        if (this.mainWindow) {
            this.mainWindow.showInactive();
            // if (this.mainWindow.isVisible()) {
            //     console.error('2222222222222222')
            //     this.createMainWindow();
            // } else {
            //     console.error('3333333333333333')
            //     this.mainWindow.showInactive();
            // }
        } else {
            this.createMainWindow();
        }
    }

    closeMainWindow() {
        this.mainWindow.close()
    }

    openOrCloseModal(params) {
        // params.options = Object.assign({parent:this.mainWindow},params.options)
        this.modalWin.showOrHideModal(params)
    }

    openOrCloseNotice(params){
        this.modalWin.close(params)
    }

    closeModal() {
        this.modalWin.show()
    }
}