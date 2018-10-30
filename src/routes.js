import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Homepage from './components/Homepage.vue'
import Navigation from './components/Navigation.vue'
import Gatto from './components/Gatto.vue'
import Cane from './components/Cane.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Homepage,
      // beforeEnter: ifLoggedIn
    },
    {
      path: '/nav',
      name: 'navigation',
      component: Navigation,
    },
    {
      path: '/gatto',
      name: 'gatto',
      component: Gatto,
    },
    {
      path: '/Cane',
      name: 'Cane',
      component: Cane,
    },

  ]
})
