<template>
  <section>
    <Header />
    <div class="section flex-display">
      <div class="container animated fadeIn">
        <div class="row">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="text-center">
              <!-- <a href="https://payafrik.io"><img class="logo" src="../assets/img/logo.png"></a> -->
              <div class="login-container shadowed-box">
                <h3 class="title">
                  Awesome! you've signed up successfully
                </h3>
                <!-- <input type="text" v-model="username" placeholder="Create a username" v-bind:class="formErrors.usernameError === true ? 'has-error' : ''"> -->
                <hr>
                <p>
                  You've gotten an email from us...<br>
                  Please follow the link in that email to confirm your email address to get started
                </p>
              </div>
              <hr>
              <p>
                Don't have an account on Holamedic? <nuxt-link to="/signup">
                  Click here
                </nuxt-link> to signup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
import Header from '~/components/partials/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      password1: '',
      password2: '',
      email: '',
      strengthClass: 'weak',
      passwordScore: '0%',
      charAdded: false,
      baseUrl: process.env.baseUrl,
      //   username: '',
      phone: '',
      formErrors: {
        passwordError: false,
        //   usernameError:false,
        emailError: false,
        phoneError: false
      },
      processing: false,
      countryCode: '+234'
    }
  },
  computed: {},
  mounted () {
    console.log(this.countryCodes)
  },
  methods: {
    signIn () {
      this.$router.push('/user-area/dashboard')
    }
  }
}
</script>

<style scoped>
.section{
    background-color:#e2dede;
    padding:35px;
}
img.logo{
    width:30%;
    filter: brightness(0) invert(1) opacity(0.8);;
}
.login-container{
    background-color:#fff;
    border-radius:5px;
    padding:35px;
    /* padding-top:50px; */
    width:100%;
    margin-top:25px;
}
button.login{
    color:#ffffffde;
    background-color: #1fa545;
}
button.login:hover{
    color:#ffffffde;
    background-color: #13642a;
}
p > a{
    font-size:1em;
}
p{
    margin:0;
}
p.terms{
    font-size:0.8em;
    color:#999;
}
p, a{
    font-size:0.8em;
    color:#3a3939d4;
}
a{
    font-weight:700;
}
a.hover{
    color:#3a3939fd;
    text-decoration:none;
}
h6{
    font-size:0.8em;
}
.password-meter{
    height: 5px;
    width: 100%;
    background-color: #eeeeee;
    margin-bottom:10px;
}
.password-strength{
    height:3px;
    margin-top:1px;
    width:50%;
    max-width:100%;
    background-color:#20a144;
    transition: all 200ms ease;
}
.strong{
    background-color:#20a144;
}
.weak{
    background-color:#a72920;
}
.medium{
    background-color:#ff8800;
}
</style>
