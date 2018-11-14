<template>
  <div class="wrapper-main">
      <h3>take on the challenge or...go in the cat section!</h3>
    <Winner v-if="hasWon"/>
    <Loser v-else-if="hasLost"/>
    <!-- <div v-else class="game-container"> -->
      <div  v-else class="game">
        <!-- <img v-bind:src="photo"  -->
        <div class="dog-image" v-bind:style="{ 'background-image' : 'url('+photo+')'}"> </div>
        <div class="wrapper">
          <div class="button-container">
            <div class="breed-button" v-for="(randomBreed, index) in randomBreeds" :key="index">
              <el-button v-bind:class="{ isSelected: 'orange' }" @click="verifyResult(randomBreed)" class="breed-buttons" round> {{randomBreed}}</el-button>
            </div>
          </div>
          <div @click="getRandomDogPhoto()" class="ext"><el-button class="breed-buttons" type="success" round>Shuffle next</el-button></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Winner from './Winner';
import Loser from './Loser';
import {
   mapActions, mapState, mapGetters
  } from 'vuex';

export default {
  computed: {
    ...mapState({
      photo: state => state.photo,
      randomBreeds: state => state.randomBreeds,
      hasWon: state => state.hasWon,
      hasLost: state => state.hasLost
    }),
    ...mapGetters({
      
      })
  },
  methods: {
    ...mapActions ({
      getRandomDogPhoto: 'getRandomDogPhoto',
      getDogRazza: 'getDogRazza',
      verifyResult: 'verifyResult'
    })
  },
  components: {
    Winner,
    Loser
  },
  created(){
    console.log('sono in gioco cane', this.photo)
    this.getRandomDogPhoto();
  },
}
</script>


<style lang="scss" scoped>
  h3{
    margin-bottom: 4%;
  }
  .game{
      display: flex;
      width: 90%;
      margin: 3% auto ;
      justify-content: space-between;
      // .image{
      //   width: 80%;
      //   height: 400px;
      //   box-shadow: 6px 5px 6px rgba(65, 64, 64, 0.527);
      //   img{
      //     width: 100%;
      //     height: 100%;
      //     object-fit: fill;
      //   }
      .dog-image{
        height: 300px;
        width: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover; 
        border: 8px solid white;
      }
      .wrapper{
        width: 50%;
        display: flex;
        flex-direction: column;
      .button-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 50%;
            margin-top: 7%;
      }
        .breed-buttons{
          width: 210px;
          margin: 5%;
          border: 3px solid darkgray;
        }
    }
  }
  
</style>

