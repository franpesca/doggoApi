<template>
  <div>
    <!-- <Navigation/> -->
    <h1>jnkubiubububew</h1>
    <!-- <Footer/> -->
  </div>
</template>

<script>
  import store from './../store.js'
  import Router from 'vue-router'  
  import Navigation from './Navigation'
  import Footer from './Footer'
  
  export default {
    name: 'Home',
    components: {
      Navigation,
      Footer,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
