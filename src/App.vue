<template>
  <div id="app">
    <Login />
    <!-- <div v-if="isLogged">
      <Navigation/>
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <Footer/>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'
  import Login from '@/components/Login.vue'
  
  export default {
    name: 'app',
    components: {
      HelloWorld,
      Navigation,
      Footer,
      Login
    }
  }
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: rgb(142, 233, 254);
    cursor: url('./assets/images/curosre.png'), auto;
  }
</style>
