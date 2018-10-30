import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    dogs: [],
    cats: [],
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
    getAuthentiation: state => state.isLogged,
    getCats: state => state.cats,
    getDogs: state => state.dogs
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
         state.isLogged  
         console.log(router.push)
         router.push('/') 
    }
  },
  SET_CATS(state, payload){
    state.cats=payload
  },
  SET_DOGS(state, payload){
    state.dogs=payload
  }
},
  actions: {
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
    getCarouselDogsPhotos({ commit }) {
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