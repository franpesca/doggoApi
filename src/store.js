import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    isAuthenticated: false,
    user: '',
    dogs: [],
    cats: [],
    isLogged: false,
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
    getLoggedIn: state => state.isLogged, 
    getCats: state => state.cats,
    getDogs: state => state.dogs,
    getAuthentication:  state => state.isAuthenticated,
    getUsername: state => state.form.username,
  },
  mutations: {
    SET_IS_LOGGED(state, payload){
      state.isLogged = payload
    },
    SET_AUTHENTICATION(state, payload){
      state.isAuthenticated = payload
    },
    SET_USERNAME(state, payload){
      state.form.username = payload
    },
  SET_CATS(state, payload){
    state.cats=payload
  },
  SET_DOGS(state, payload){
    state.dogs=payload
  }
},
  actions: {
    checkForm({commit, state}, payload){
      console.log('entrato n checkform')
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
        commit ('SET_IS_LOGGED',true) 
        commit ('SET_AUTHENTICATION', true)
         //  state.isLogged  
         console.log(router.push)
         router.push('/') 
        //  state.isAuthenticated
        
        // state.form.username = payload
        commit ('SET_USERNAME',payload.username)
         
    }
  },
    
    getCarouselCatsPhotos({ commit }) {
      console.log('catCarousel')
        // commit('SET_LOADING', true);
        axios.get('https://api.thecatapi.com/v1/images/search?limit=25')
        .then(res => res.data)
        .then(res => {
          console.log(res, 'resCats')
        commit('SET_CATS', res)
        // commit('SET_LOADING', false);
        })
    },
    getCarouselDogsPhotos({ commit } ) {
        // commit('SET_LOADING', true);
        axios.get('https://dog.ceo/api/breeds/image/random/25')
        .then(res => res.data)
        .then(res => {
          console.log(res.message, 'resDog')
        commit('SET_DOGS', res.message)
        // commit('SET_LOADING', false);
        })
    },
  },
})

export default store