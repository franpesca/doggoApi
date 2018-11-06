<template>
  <section class="bg-image">
    <div class="gradient">
      <div class="login-wrapper">
        <p>Login with Social Media</p>
        <a class="social fb" href="https://it-it.facebook.com/" target="_blank>">Login with Facebook </a>
        <a class="social tw" href="https://twitter.com/?lang=it" target="_blank>">Login with Twitter</a>
        <a class="social gg" href="https://accounts.google.com/signin/v2/sl/pwd?hl=IT&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank>">Login with Google</a>
        <p>Or sign in manually</p>
        <form @keyup.enter.native="checkForm(form)" @submit.prevent="checkForm(form)">
          <div class="input-wrapper"><i class="icon-profile icon-input"></i><input autocomplete="off" v-model="form.username" class="social username-psw" type="text" placeholder="Username"></div>
          <span class="icon-point-right"></span><p style="color: red; margin-top: -2px; font-weight: 300" v-if="error.user"> Please, type again your username</p>
          <div class="input-wrapper"><i class="icon-password icon-input"></i><input autocomplete="off" :type="inputTypePsw" v-model="form.password" class="social username-psw" placeholder="Password"></div>
          <p style="color: red; margin-top: -2px; font-weight: 300" v-if="error.psw"> Please, type again your password </p>
          <button @click="switchType"><i class="icon-eye-blocked" ></i> watch your psw</button><br>

          <input class="social login rotate" type="submit">
        </form>
  
        <button class="social manually-login">Sign Up</button>
        <button class="social manually-login">Forgot your password?</button>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    mapState, mapGetters, mapActions
  } from 'vuex';
  export default {
    computed: {
      ...mapState({
        form : state => state.form,
        error: state => state.error,
      }),
      ...mapGetters({
        getLoggedIn: 'getLoggedIn',
        isAuthenticated: 'getAuthentication',
      })

    },
    data: () => ({
      isActive: false,
      inputTypePsw: 'password',
    }),
    methods: {
      switchType(){
        return this.inputTypePsw = this.inputTypePsw === 'password' ? 'text' : 'password' 
      },
      ...mapActions({
        checkForm:'checkForm'
      })
    },

  }
</script>

<style lang="scss" scoped>
  .bg-image {
    background-image: linear-gradient(to bottom right, rgba(44, 28, 48, 0.886), rgb(242, 195, 137));
    height: 100vh;
    background-size: cover;  
    .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-wrapper {
      width: 35%;
      display: flex;
      flex-direction: column;
      height: 90%;
      background-color: rgba(255, 255, 255, 0.416);
      border-radius: 5px;
      border: 2px solid rgba(44, 28, 48, 0.886); 
      @media all and (max-width: 900px) {
       width: 60%;
     }
     @media all and (max-width: 550px) {
       width: 75%;
     }
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
      }
      a:hover {
        opacity: .5;
      }
      input {
        cursor: pointer;
        text-align: center;
      }
      input:focus,
      & input:active {
        outline: none;
        cursor: pointer;
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
        margin: 7px;
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
          background-color: rgba(255, 132, 0, 0.948);
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
        background-color: rgba(44, 28, 48, 0.886);
      
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

