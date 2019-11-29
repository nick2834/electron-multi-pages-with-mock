import Vue from 'vue';
import App from './App';
import router from './router'
import httpRequest from '@/utils/httpRequest'
import VueCookie from 'vue-cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import '@/mock'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = httpRequest
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});