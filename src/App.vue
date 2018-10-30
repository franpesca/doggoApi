<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'
  import Login from '@/components/Login.vue'
  import {
    mapState
  } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        isLogged: state => state.isLogged,
      })
    },
    name: 'app',
    components: {
      Home,
      Navigation,
      Footer,
      Login
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  
  a {
    font-weight: bold;
    color: rgb(247, 246, 246);
    text-decoration: none;
  }
    
  
  
  
  /* .router-link-active{
      text-decoration: underline;
    } */
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: white;
    /* cursor: url('./assets/images/curosre.png'), auto; */
  }
</style>
