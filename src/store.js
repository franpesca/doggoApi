import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import routes from './routes'
import router from './routes'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    isLogged: true,
    form: {
      username: '',
      password: '',
      },
    error: {
      user: false,
      psw: false,
    } 
},
  getters: {
    getAuthentiation: state => state.isLogged
  },
  mutations: {
    CHECKFORM(state){
      if ( !state.form.username && !state.form.password) {
        state.error.user = true ,
        state.error.psw = true,
        state.form.username = '',
        state.form.password  = '';
      }
      else if ( !state.form.username || state.form.username.length <= 3) {
       state.error.user = true 
     } else if ( !state.form.password || state.form.password.length <= 3) {
       state.error.psw = true 
     } else {
       console.log('entrato nel ultimo else')
       console.log(state.isLogged, 'tiprego')
         state.isLogged  
         console.log(router.push)
         router.push('/home') 
    }
  }
},
  actions: {

  },
})

export default store