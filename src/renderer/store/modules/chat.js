// import http from '@/utils/httpRequest'
const state = {
    chatList: [],
    chatId: ""
}

const mutations = {
    updateChatList(state, list) {
        state.chatList = list
    },
    updateChatid(state, id) {
        state.chatId = id
    }
}

const actions = {
    getList({
        state,
        commit
    }) {
        return new Promise((resolve, reject) => {
            resolve(1)
            // http.get('/wechat/list').then(({
            //     data
            // }) => {
            //     commit('updateChatList', data.page.list)
            //     resolve(data)
            // }).catch(err => {
            //     reject(err)
            // });
        })
    }
}

export default {
    state,
    mutations,
    actions
}