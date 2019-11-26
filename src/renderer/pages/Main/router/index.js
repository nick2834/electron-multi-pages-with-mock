import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: '/wechat'
    },
    {
      path: '/',
      name: 'home',
      component: require('../Home').default,
      children: [{
        path: '/wechat',
        name: 'wechat',
        component: require('../Wechat').default
      }, {
        path: '/contact',
        name: 'contact',
        component: require('../Contact').default
      }, {
        path: '/collect',
        name: 'collect',
        component: require('../Collect').default
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})