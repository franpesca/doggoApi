import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
// import store from './store'

Vue.use(Router)

// const ifLoggedIn = (to, from, next) => {
//   if (this.$store.state.isLogged){
//     next('/home')
//     return
//   }
//   next('/home')
// }

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/homepage',
      name: 'home',
      component: Homepage,
      // beforeEnter: ifLoggedIn
    },
    {
      path: '/nav',
      name: 'navigation',
      component: Navigation,
      // beforeEnter: ifLoggedIn
    },
  ]
})
