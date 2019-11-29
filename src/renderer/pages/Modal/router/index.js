import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


export default new Router({
    routes: [{
        path: '/',
        redirect: '/adduser'
    }, {
        path: '/adduser',
        name: 'adduser',
        component: require('../views/adduser').default
    }, {
        path: '/notice',
        name: 'notice',
        component: require('../views/notice').default
    }]
})