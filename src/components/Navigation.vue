<template>
  <div>
    <el-menu v-if="isAuthenticated" background-color="#453549" text-color="#fff" active-text-color="#45a0fc" class="hidden-xs-only el-menu-demo" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
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
        <el-menu-item index="4" class="user-container">
          <span class="user" >
              Hi<span class="nome-utente"> {{getUsername}} </span>
              <img class="user-icon" src="./../assets/icons/user.svg"> |  <button @click="logout" class="logout"><img class="user-icon logout" src="./../assets/icons/logout.svg"></button>
          </span>
          <!-- <span class="user"> <router-link to="login">  LOGIN | SIGNUP  <img class="user-icon login" src="./../assets/icons/login.svg"></router-link></span> -->
        </el-menu-item >
      </el-menu>
        <div class="line"></div>

    <div v-if="isAuthenticated" class="hidden-sm-and-up burgerManu">
      <div class="container-burger">
      <div class="wrapper">
        <button @click="isToggleActive = !isToggleActive" v-bind:class="{ toggleActive : !isToggleActive, toggleDisabled : isToggleActive }"><span v-bind:class="{ toggleActive : !isToggleActive, toggleDisabled : isToggleActive }"> </span> </button>
      </div>
        <img class="icona" src="./../assets/icons/user.svg"> 
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
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        isAuthenticated: 'getAuthentication',
        getUsername: 'getUsername'
      }),
      // ...mapState({
      //   isAuthenticated: state => state.isAuthenticated,
      // })
    },
    data: () => ({
      activeIndex: '1',
      isToggleActive: false
    }),
    methods: {
      handleSelect(key, keyPath) {},
      ...mapActions({
        logout : 'logout'
      })
    }
  }
</script>

<style lang="scss" scoped>
   .user-container {
     display: inline-block;
     margin-left: 46%;
     @media all and (max-width: 990px) {
       margin-left: 30%;
     }
     margin-top: 0;
     .logout {
         color: transparent;
         outline: none;
         background-color: transparent;
         border: transparent;
       }
     
     .user {
       width: 24px;
       color: white;
       .user-icon {
         margin-left: 5px;
         width: 24px;
         &.logout {
           width: 18px;
           opacity: .5;
           &:hover {
             color: #45a0fc;
             opacity: 1;
           }
         }
       }
     }
   }
   
   .logout:hover {
     color: #45a0fc;
     opacity: 1;
   }
   
   .container-burger {
     display: flex;
     justify-content: space-around;
     height: inherit;
   }
   
   .burgerManu {
     background-color: rgba(44, 28, 48, 0.886);
     // background-image: linear-gradient(to bottom right, rgba(255, 132, 0, 0.948), rgb(242, 195, 137));
     height: 70px;
     .icona {
       width: 34px;
     }
     .wrapper {
       padding: 20px;
       button {
         display: flex;
         justify-content: flex-start;
         background-color: transparent;
         flex-direction: column;
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
       position: relative;
       width: 33px;
       height: 4px;
       margin-bottom: 5px;
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
     transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .slide-fade-enter,
   .slide-fade-leave-to
   /* .slide-fade-leave-active below version 2.1.8 */
   
   {
     transform: translateX(10px);
     opacity: 0;
   }
   
   .burgerino {
     ul {
       list-style-type: none;
       margin: 0px;
       padding: 15px;
       background-color: orange;
       li {
         padding: 10px 0 0;
       }
     }
   }
</style>

