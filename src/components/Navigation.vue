<template>
  <div>
    <el-menu background-color="#221b29" text-color="#fff" active-text-color="#45a0fc" class="hidden-xs-only el-menu-demo" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">DoggoDog</el-menu-item>
      <el-submenu index="2">
        <template slot="title">InDaDogs
</template>
               <el-menu-item index="2-1">Doggo doggyno</el-menu-item>
               <el-menu-item index="2-2">Doggo doggone</el-menu-item>
               <el-menu-item index="2-3">Doggo doggetto</el-menu-item>
                 <el-submenu index="2-4">
<template slot="title">
   Crazy doggo
</template>
                     <el-menu-item index="2-4-1">Crazy doggo one</el-menu-item>
                     <el-menu-item index="2-4-2">Crazy doggo two</el-menu-item>
                     <el-menu-item index="2-4-3">Crazy doggo three</el-menu-item>
                 </el-submenu>
               </el-submenu>
              <el-menu-item index="3">DogDiggity</el-menu-item>
  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item> -->
        </el-menu>
        <div class="line"></div>

    <div  class="hidden-sm-and-up burgerManu">
      <div class="wrapper">
        <button @click="isToggleActive = !isToggleActive" v-bind:class="{ toggleActive : !isToggleActive, toggleDisabled : isToggleActive }"><span v-bind:class="{ toggleActive : !isToggleActive, toggleDisabled : isToggleActive }"> </span> </button>
      </div>
    </div>
  <transition name="slide">
    <div class="burgerino" v-if="isToggleActive">
      <ul>
        <li>DoggoDog</li>
        <li>InDaDogs</li>
        <li>DogDiggity</li>
      </ul>
     </div>
  </transition>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  export default {
    data: () => ({
      activeIndex: '1',
      isToggleActive: false
    }),
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .burgerManu {
    background-color: rgb(34, 27, 28);
    height: 70px;
    ;
    .wrapper {
      padding: 20px;
      button {
        background-color: transparent;
        border: none;
        span {
          &.toggleDisabled {
            opacity: 0 !important;
          }
        }
        &:focus,
         :active {
          border: none;
          color: transparent;
          outline: none;
          // & .toggleActive :before, :after{
          //   top: 0;
          // }
          // &:before{
          //   transform: rotate(45deg);
          // };
          // &:after{
          //   transform: rotate(-45deg);
          // }
        }
      }
    }
    .wrapper span {
      &.toggleDisabled {
        opacity: 0 !important;
      }
    }
    .wrapper span,
    .wrapper button:before,
    .wrapper button:after {
      display: block;
      position: relative;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      // background: #c8c2ff;
      background: white;
      border-radius: 3px;
      z-index: 1;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.208);
      transition: all .5s ease-in-out;
    }
    .wrapper button:before {
      content: '';
    }
    .wrapper button.toggleDisabled:before {
      transform: rotate(45deg) translate(0px, 12px) !important;
    }
    .wrapper button:after {
      content: '';
    }
    .wrapper button.toggleDisabled:after {
      transform: rotate(-45deg) translate(0px, -12px);
    }
  }
  
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  
  // .fade-enter-active{
  //   animation: showBurgerino 1s ease forwards;
  // }
  // .fade-enter-active{
  //   animation: hideBurgerino 1s ease forwards;
  // }
  // @keyframes showBurgerino{
  //   0% {
  //     opacity: 0;
  //     visibility: visible;
  //   }
  //   100%{
  //     opacity: 1;
  //     visibility: hidden;
  //   }
  // }
  //   @keyframes hideBurgerino{
  //   0% {
  //     opacity: 1;
  //     visibility: visible;
  //   }
  //   100%{
  //     opacity: 0;
  //     visibility: hidden;
  //   }
  // }
  .burgerino {
    ul {
      list-style-type: none;
    }
  }
</style>

