<template>
  <div>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
      <iframe v-show="hasLost" src="https://giphy.com/embed/3o7TKr3nzbh5WgCFxe" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </transition>
    <p> it was a <strong>{{razzaCane}} </strong> </p>
    <div class="button-container">
      <div @click="goPrevious"><el-button class="breed-buttons" type="success" round><img class="freccia " src="./../assets/icons/backward.svg"></el-button></div>
      <div @click="resetState"><el-button class="breed-buttons" type="success" round><img class="freccia fw" src="./../assets/icons/backward.svg"></el-button></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  computed:{
    ...mapState({
      hasLost: state => state.hasLost,
      razzaCane: state => state.razzaCane
    })
  },
  methods: {
    ...mapActions({
      resetState: 'resetState',
      // getRandomDogPhoto: 'getRandomDogPhoto',
    }),
    ...mapMutations({
      goPrevious : 'GO_PREVIOUS',
    })
  },
}
</script>

<style lang="scss" scoped>
.fw{
  transform: rotate(180deg);
}
.button-container{
  display: flex;
  margin: 0 auto;
  width: 30%;
  justify-content: center
}
.slide-fade-enter-active {
transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

