<template>
  <div v-if="isAuthenticated">
    <button @click="goBackwards" class="button"><img class="freccia" src="./../assets/icons/backward.svg"></button>
    <button @click="goForwards" class="button forward"><img class="freccia avanti" src="./../assets/icons/backward.svg"></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        isAuthenticated: 'getAuthentication',
      })
    },
    methods: {
      ...mapActions({
        goBackwards : 'goBackwards',
        goForwards : 'goForwards'
      }),  
    }
  }

</script>

<style lang="scss"> 
  .button{
    &:focus,
     {
       outline: none;
       opacity: .5;
      }
    position: absolute;
    top: 80px;
    left: 10px;
    color: transparent;
    background: transparent;
    border: transparent;
     &.forward{
       left: 40px;
       right: 13px;
     }
  }
  .freccia{
    width: 24px;
    &.avanti{
      transform: rotate(180deg);
    }
  }
</style>

