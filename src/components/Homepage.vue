<template>
  <div class="hp-wrapper">
    <h1>Welcome to La Razza Pazza</h1>
    <div class="circle-container">
      <div class="circle">
        <router-link to="/cane"> <img src="./../assets/icons/dog.svg"> Dog Person </router-link>
      </div>
      <div class="circle">
        <router-link to="/gatto"><img src="./../assets/icons/cat.svg"> Cat Person </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './../store.js'
  import {
    mapState,
    mapActions
  } from 'vuex';
  export default {
    computed: {
  
    },
    data: () => ({
  
    }),
    methods: {
  
    }
  }
</script>

<style lang="scss">
  .hp-wrapper {
    background-image: linear-gradient(to bottom right, rgba(255, 132, 0, 0.948), rgb(242, 195, 137));
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    h1 {
      margin-top: 5%;
    }
    .circle-container {
      margin-top: 5%;
      display: flex;
      width: 60%;
      justify-content: space-around;
    }
    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: rgb(247, 128, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 10px solid white;
    }
    .carousel-hp {
      padding-top: 3%;
      margin-top: 10%;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
    }
  }
</style>


