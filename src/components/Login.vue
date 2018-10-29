<template>
  <section class="bg-image">
    <div class="gradient">
      <!-- <transition name="bouce">
        <h1>Welcome to 'La Razza Pazza'</h1>
      </transition> -->
      <div class="login-wrapper">
        <p>Login with Social Media</p>
        <a class="social fb" href="https://it-it.facebook.com/" target="_blank>">Login with Facebook </a>
        <a class="social tw" href="https://twitter.com/?lang=it" target="_blank>">Login with Twitter</a>
        <a class="social gg" href="https://accounts.google.com/signin/v2/sl/pwd?hl=IT&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank>">Login with Google</a>
        <p>Or sign in manually</p>
        <form @keyup.enter.native="checkForm" @submit.prevent="checkForm">
          <div class="input-wrapper"><i class="icon-profile icon-input " ></i><input autocomplete="off" v-model="form.username" class="social username-psw" type="text" placeholder="Username"></div>
          <span class="icon-point-right"></span><p style="color: red; margin-top: -2px; font-weight: 300" v-if="error.user"> Please, type again your username</p>
          <div class="input-wrapper"><i class="icon-password icon-input"></i><input autocomplete="off" :type="inputTypePsw" v-model="form.password" class="social username-psw" placeholder="Password"></div>
          <p style="color: red; margin-top: -2px; font-weight: 300" v-if="error.psw"> Please, type again your password </p>
          <button type="text" @click="switchType"><i class="icon-eye-blocked" ></i> watch your psw</button><br>

          <input class="social login rotate" type="submit">
        </form>
  
        <button class="social manually-login">Sign Up</button>
        <button class="social manually-login">Forgot your password?</button>
      </div>
    </div>
  </section>
</template>

<script>
  import store from './../store.js'
  import Homepage from './Homepage.vue'
  import {
    mapState, mapMutations
  } from 'vuex';
  export default {
    computed: {
      ...mapState({
        isLogged: state => state.isLogged,
        form : state => state.form,
        error: state => state.error,
      }),

    },
    data: () => ({
      isActive: false,
      inputTypePsw: 'password',
    }),
    methods: {
      switchType(){
        return this.inputTypePsw = this.inputTypePsw === 'password' ? 'text' : 'password' 
      },
      ...mapMutations({
        checkForm:'CHECKFORM'
      })
    },

  }
</script>

<style lang="scss" scoped>
  .bg-image {
    background-image: url('./../assets/images/RAZZAPAZZA.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background-size: cover;
    // filter: grayscale(90%);
    .gradient {
      background-image: linear-gradient(90deg, rgba(41, 39, 39, 0.664) 0%, rgba(66, 74, 80, 0.678) 100%), url("/../../asset/beer.jpg");
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .login-wrapper {
      width: 32%;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 5%;
      left: 55%;
      background-color: rgba(255, 255, 255, 0.416);
      border-radius: 5px;
      border: 2px solid #0e4b88; 
      p:first-child {
        font-size: 28px;
      }
      a {
        text-decoration: none;
        line-height: 35px;
      }
      a:active,
      a:focus,
      a:hover {
        outline: none;
        cursor: url('./../assets/images/curosre.png'), auto;
      }
      a:hover {
        opacity: .5;
      }
      input {
        cursor: url('./../assets/images/curosre.png'), auto;
        text-align: center;
      }
      input:focus,
      & input:active {
        outline: none;
        cursor: url('./../assets/images/curosre.png'), auto;
        background: white;
        ;
      }
      input::placeholder {
        text-align: center;
      }
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
      .social {
        margin: 10px;
        border: 1px solid black;
        border-radius: 7px;
        color: white;
        height: 35px;
        width: 80%;
        margin: 8px auto;
        &.username-psw {
          color: black;
        }
        &.login {
          background-color: green;
          color: white;
          font-size: 18px;
        }
      }
      .fb {
        background-color: #3B5998;
      }
      .tw {
        background-color: #55ACEE;
      }
      .gg {
        background-color: #dd4b39;
      }
      button {
        cursor: url('./../assets/images/curosre.png'), auto;
        // transition-duration: 1s;
        &:active,
        &:focus {
          outline: none;
        }
        &:hover {
          opacity: .5;
        }
      }
      .manually-login {
        border: none;
        border-radius: 0;
        width: 100%;
        margin-bottom: 0px;
        background-color: #0e4b88;
        // background-color: rgba(114, 54, 54, 0.516);
      }
    }
  }
  .input-wrapper{
    position: relative;
  }
  .icon-input{
    font-size: 18px;
    opacity: .7;
    position: absolute;
    left:50px;
    top: 15px;
  }
  
  .login-wrapper:hover .rotate {
    transform: rotateY((360deg)) !important;
    transition: transform 1s linear !important;
  }
</style>

