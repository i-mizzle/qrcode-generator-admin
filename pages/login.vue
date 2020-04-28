<template>
  <section>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="login-form flex-display">
                <div class="">
                  <h3 class="title">
                    Login to your account
                  </h3>
                  <p>
                    You can log in with your email address and your password
                  </p>
                  <div class="underline" />

                  <label>Email</label>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Your email address"
                  >

                  <label>Password</label>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="Your password"
                  >

                  <div class="col-md-12">
                    <button
                      v-if="!processing"
                      class="primary-btn float-right"
                      @click="login()"
                    >
                      Log in to your account
                    </button>
                    <button
                      v-if="processing"
                      disabled
                      class="primary-btn float-right"
                    >
                      Logging you in...
                    </button>
                  </div>
                  <hr class="clear">
                  <p class="form-tip">
                    Don't have an account on Holamedic?
                    <nuxt-link to="/signup">
                      Click here
                    </nuxt-link>
                    to signup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-8 no-padding">
            <div class="section login-img flex-display not-for-mobile">
                <img src="../assets/img/login.svg" alt="">
            </div>
        </div> -->
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
      processing: false,
      email: '',
      password: '',
      baseUrl: process.env.baseUrl
    }
  },
  beforeMount () {},
  mounted () {},
  methods: {
    async login () {
      this.processing = true
      const requestBody = {
        email: this.email,
        password: this.password
      }
      console.log(requestBody)
      try {
        const response = await this.$axios.post(
          this.baseUrl + 'login',
          requestBody
        )
        console.log(response)
        if (response.data.status === true && response.data.data.userType === 'SYSTEM_ADMIN') {
          // this.signingUp = false,
          const userDetails = {
            token: response.data.data.token,
            email: response.data.data.email,
            phone: response.data.data.phone,
            id: response.data.data.userId
          }

          this.$cookies.set('userdetails', userDetails, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
          this.$router.push('../user-area/dashboard')
        } else {
          this.$toast.error('Sorry! Log in failed')
        }
      } catch (error) {
        this.processing = false
        console.error(error)
        this.$toast.error("Sorry! We couldn't log you in")
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-img {
  background-color: #f0f0f0;
}
.login-form {
  height: 100vh;
}
.login-img img {
  width: 60%;
  margin: auto;
}
</style>
