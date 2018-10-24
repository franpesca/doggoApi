import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import store from './store'
import router from './routes'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(VueRouter)
Vue.use (VueAxios, axios)
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
