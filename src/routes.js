import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Homepage from './components/Homepage.vue'
import Navigation from './components/Navigation.vue'
import Gatto from './components/Gatto.vue'
import Cane from './components/Cane.vue'
import store from './store.js'

Vue.use(Router)

const userIsLogged = (to,from,next) => {
  const username = store.getters.getUsername
  if (username) {
    next()
  } else {
    next('/login')
  }
}

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
      beforeEnter: userIsLogged,
    },
    {
      path: '/gatto',
      name: 'gatto',
      component: Gatto,
      beforeEnter: userIsLogged,
    },
    {
      path: '/cane',
      name: 'cane',
      component: Cane,
      beforeEnter: userIsLogged,
    },

  ]
})
