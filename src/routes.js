import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Homepage from './components/Homepage.vue'
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

const navError = (to, from, next) => {

  const user = store.getters.getUsername
  if (user) {
    next('/')
  } else {
    next()
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
      beforeEnter: navError,
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
