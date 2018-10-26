import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogged: false,
    form: {
      username: '',
      password: '',
  } 
},
  getters: {

  },
  mutations: {
    CHECKFORM(state,payload){
      console.log(payload)
     if (state.username === francesca && state.password === linkme) 
     console.log('funziona')
     return state.isLogged = true
     

    //  if(!this.username) {

    //  }
    }
  },
  actions: {

  },
})

export default store