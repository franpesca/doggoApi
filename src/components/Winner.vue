<template>
  <div>
    <transition name="slide-fade">
      <iframe v-show="hasWon" src="https://giphy.com/embed/KpE6VQtCsJcsM" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </transition>
    <div @click="resetState"><el-button class="breed-buttons" type="success" round>Shuffle next</el-button></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed:{
    ...mapState({
      hasWon: state => state.hasWon,
    })
  },
  methods: {
    ...mapActions({
      resetState: 'resetState',
    })
  },
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

