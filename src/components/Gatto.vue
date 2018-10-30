<template>
  <div class="gatto-wrapper">
    <el-carousel class :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(cat ,index) in cats" :key="index" >
          <img v-bind:src="cat.url" />
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
        cats: state => state.cats
      }), 
    },
  data: () =>({

  }),
  methods: {
    ...mapActions({
      getCarouselCatsPhotos: 'getCarouselCatsPhotos'
    })
  },
  created(){
    console.log('oioioio')
    this.$store.dispatch('getCarouselCatsPhotos')
  }
  }
</script>

<style lang="scss">
.gatto-wrapper{
  background-image: linear-gradient(to bottom right, rgba(255, 132, 0, 0.948), rgb(242, 195, 137));
  height: 100vh;
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


