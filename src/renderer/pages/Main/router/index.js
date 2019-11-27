import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
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
export default router