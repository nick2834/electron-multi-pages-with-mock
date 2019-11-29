import {
    BrowserWindow
} from 'electron'
import {
    defaultConfig
} from './config'
export default class modal {
    contextURL(URL) {
        return process.env.NODE_ENV === 'development' ?
            `http://localhost:9080/Modal/#${URL}` :
            `file://${__dirname}/Modal/index.html#${URL}`
    }
    modalWindow = null
    params = null
    url = null
    copyWindow = null
    constructor(params, url) {
        this.params = params
        this.url = url
        // this.createModalWindow(params, url)
    }
    createModalWindow(options, url) {
        this.modalWindow = new BrowserWindow({
            modal: true,
            height: 420,
            width: 420,
            movable: false,
            ...options,
            ...defaultConfig
        })
        this.modalWindow.loadURL(this.contextURL(url))
        this.modalWindow.on('ready-to-show', () => {
            this.modalWindow.show()
        })
        this.modalWindow.on('closed', () => {
            this.modalWindow = null
        })
    }

    showOrHideModal(params) {
        if (params.isOpen) {
            this.showModalWithData(params)
        } else {
            this.modalWindow.hide()
        }
    }

    showModalWithData(params) {
        if (this.modalWindow) {
            this.modalWindow.show()
            this.modalWindow.webContents.send('modal-messages', params.data);
        } else {
            this.createModalWindow(params.options, params.url)
        }

    }


    openOrCloseNotice(params) {
        if (params.isOpen) {
            if (this.modalWindow) {
                this.modalWindow.show()
                this.modalWindow.webContents.send('notice-messages', params.data);
            } else {
                this.createModalWindow(params.options, params.url)
            }
        } else {
            this.modalWindow.hide()
        }
    }

    closemodalWindow() {
        this.modalWindow.close()
    }
}