import {
    BrowserWindow
} from 'electron'
import {
    defaultConfig
} from './config'
export default class modal {
    modalURL = process.env.NODE_ENV === 'development' ?
        `http://localhost:9080/Modal` :
        `file://${__dirname}/Modal/index.html`
    modalWindow = null
    constructor(params) {
        this.createModalWindow(params)
    }
    createModalWindow(win) {
        this.modalWindow = new BrowserWindow({
            parent: win,
            modal: true,
            height: 420,
            width: 420,
            movable: false,
            ...defaultConfig
        })

        this.modalWindow.loadURL(this.modalURL)
        this.modalWindow.closeDevTools()
        // this.modalWindow.on('ready-to-show', () => {
        //     this.modalWindow.show()
        // })

        this.modalWindow.on('closed', () => {
            this.modalWindow = null
        })
    }

    showmodalWindow() {
        if (this.modalWindow) {
            if (this.modalWindow.isVisible()) {
                this.createModalWindow();
            } else {
                this.modalWindow.showInactive();
            }
        } else {
            this.createModalWindow();
        }
    }

    showOrHideModal(params) {
        params ? this.modalWindow.show() : this.modalWindow.hide()
    }

    closemodalWindow() {
        this.modalWindow.close()
    }
}