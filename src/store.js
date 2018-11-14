import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    isSelected: false,
    hasWon: false,
    hasLost: false,
    randomBreeds:[''],
    razzaCane: '',
    photo: '',
    move: 0,
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
    getDogPhotos: state => state.photo,
    getLoggedIn: state => state.isLogged, 
    getCats: state => state.cats,
    getDogs: state => state.dogs,
    getAuthentication:  state => state.isAuthenticated,
    getUsername: state => state.form.username,
    GetMove: state => state.move,
    getRazzaCane: state => state.razzaCane,
    getFourRazze: state => state.fourRandomRazze,
    getWinner: state =>state.hasWon,
    getLoser: state => state.hasLost,
    getOrange: state => state.isSelected
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
  },
  MOVE_FW(state){
    state.move ++
    // state.moves.push('MOSSA')
  },
  MOVE_BW(state){
    state.move -- 
    // state.moves.splice(0,1)
  },
  LOGOUT_USER(state){
    state.form.username= '',
    state.form.password=''
    state.isAuthenticated = !state.isAuthenticated
    router.push('/login')
  },
  SHOW_DOG_PHOTO(state, payload){
    state.photo=payload
  },
  SET_RAZZA(state, payload){
    state.razzaCane = payload
  },
  SET_RANDOM_RAZZE(state, payload){
    state.randomBreeds = payload
    state.randomBreeds.push(state.razzaCane);
    state.fourRandomRazze = state.randomBreeds.sort(() => .5 - Math.random())
    console.log(state.fourRandomRazze)
  },
  SET_WINNER(state, payload){
    state.hasWon = payload
  },
  SET_LOSER(state, payload){
    state.hasLost = payload
  },
  RESET_STATE(state){
    state.hasWon = false; 
    state.hasLost = false
    // state.hasLost = false
  },
  GO_PREVIOUS(state){
    state.hasLost = false
  },
  SET_ISSELECTED(state, payload){
    state.isSelected = payload
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
    goForwards({ commit}) {
      console.log('moveFw',router)
      router.go(1)
      commit('MOVE_FW')
    },
    goBackwards({ commit }) {
      router.go(-1)
      commit('MOVE_BW')
    },
    logout({ commit }) { 
      commit('LOGOUT_USER')
    },
    getRandomDogPhoto({commit, dispatch}) {
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => res.data)
      .then( res => {
        console.log('this a is random picture', res.message)
        commit('SHOW_DOG_PHOTO', res.message)
        dispatch('getDogRazza')
        dispatch('getRandomRazze')

      })
    },
    getDogRazza({commit, state}) {
      
      const photoDog = state.photo
      const string = String(photoDog)
      console.log('stringa', string)

      const newString = string.split('/')
      console.log ('newString', newString)

      const razza = newString[newString.length-2]
      console.log('razza', razza)

      commit('SET_RAZZA', razza)
    },
    getRandomRazze({commit, state}) {
      axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => res.data)
      .then( res => {
        console.log('this a is the list', res.message)
          const pippo = res.message
          //Object.keys(pippo) torna un array con tutte le chiavi dell oggetto pippo
          //uso .5 in modo tale da avere il 50% di possibilita che con math.random mi torni un valora > o < del numer
          const random = Object.keys(pippo).sort(() => .5 - Math.random()).slice(0,3)
          console.log('random',random)
          commit('SET_RANDOM_RAZZE', random)
      })
    },
    verifyResult({commit, state}, randomBreed){
      if (randomBreed == state.razzaCane) {
        commit('SET_ISSELECTED', true)
        setTimeout(() =>{
          commit('SET_WINNER', true)
        }, 3000)
      } else {
        console.log('hasLost')
        commit('SET_LOSER', true)
      }
    },
    resetState({commit, dispatch}) {
      commit('RESET_STATE');
      dispatch('getRandomDogPhoto')
    }
  },
})

export default store