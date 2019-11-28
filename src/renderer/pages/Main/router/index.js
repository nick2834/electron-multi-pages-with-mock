import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
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
      component: require('../views/Home').default,
      children: [{
        path: '/wechat',
        name: 'wechat',
        component: require('../views/Wechat').default,
        children: [{
          path: '/room',
          name: 'room',
          component: require('../views/Room').default,
          meta: {
            parent: 'wechat'
          }
        }]
      }, {
        path: '/contact',
        name: 'contact',
        component: require('../views/Contact').default
      }, {
        path: '/collect',
        name: 'collect',
        component: require('../views/Collect').default
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router