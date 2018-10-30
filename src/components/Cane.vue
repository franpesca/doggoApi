<template>
  <div class="cane-wrapper">
    <el-carousel class :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(dog ,index) in dogs" :key="index" >
          <img v-bind:src="dog" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import store from './../store.js'
import {
    mapState, mapActions
  } from 'vuex';
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
  methods: {
    ...mapActions({
      getCarouselDogsPhotos: 'getCarouselDogsPhotos'
    })
  },
  created(){
    console.log('creatocane')
    this.$store.dispatch('getCarouselDogsPhotos')
  }
  }
</script>

<style lang="scss">
.cane-wrapper{
  background-image: linear-gradient(to bottom right, rgba(255, 132, 0, 0.948), rgb(242, 195, 137));
  height: 100vh;
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


