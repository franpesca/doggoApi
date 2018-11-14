<template>
  <div class="cane-wrapper">
    <h1>Welcome to DoggoLand</h1>
    <cane-game />
    <!-- <el-carousel class="carosello" :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(dog ,index) in dogs" :key="index" >
          <img v-bind:src="dog" />
      </el-carousel-item>
    </el-carousel> -->
  </div>
</template>

<script>
import {
    mapState, mapActions
  } from 'vuex';
import CaneGame from './CaneGame.vue'
  export default {
    computed: {
      ...mapState({
        dogs: state => state.dogs
      }), 
      // ...mapGetters({
      //   cats: 'getCats'
      // })
    },
  data: () =>({

  }),
  components: {
    CaneGame
  },
  methods: {
    ...mapActions({
      getCarouselDogsPhotos: 'getCarouselDogsPhotos'
    })
  },
  created(){
    console.log('creatocane')
    this.getCarouselDogsPhotos()
  }
  }
</script>

<style lang="scss">
.cane-wrapper{
  h1{
    margin-top: 0px;
    margin-bottom: 0px;
    text-transform: uppercase;
    padding-top: 3%;

  }
  background-image: linear-gradient(to bottom right, rgba(255, 132, 0, 0.948), rgb(242, 195, 137));
  height: 100vh;
  .carosello{
    position: absolute;
    top: 32%;
    left: 7%;
  }
  .carousel-hp {
    padding-top: 23%;
    margin-top: 10%;
    
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
    // .el-carousel__item:nth-child(2n) {
    //   background-color: #99a9bf;
    // }
    // .el-carousel__item:nth-child(2n+1) {
    //   background-color: #d3dce6;
    // }
  }
}
</style>


