<template>
  <section>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="v-spacer" />
              <div class="login-form">
                <h3 class="title">
                  CREATE YOUR ACCOUNT
                </h3>

                <div v-if="signingUp" class="text-center animated fadeInUp">
                  <Preloader /><br>
                  <p class="form-tip">
                    Signing you up...
                  </p>
                </div>

                <div v-if="!signingUp">
                  <div v-if="step === 1" class="animated fadeIn">
                    <p class="form-tip">
                      Fill in your details below to get started
                    </p>
                    <label>name</label>
                    <input
                      v-model="fullName"
                      type="text"
                      :class="formErrors.nameError === true ? 'has-error' : ''"
                      placeholder="Your full name"
                    >
                    <!-- <label>Gender</label>
                        <input v-model="gender" type="email"> -->
                    <label>Email</label>
                    <input v-model="email" type="email" :class="formErrors.emailError === true ? 'has-error' : ''" placeholder="Your active email address">
                    <label>Phone number</label>
                    <input v-model="phone" type="text" :class="formErrors.phoneError === true ? 'has-error' : ''" placeholder="Your active phone number">

                    <label>Password</label>
                    <div class="password-container">
                      <input
                        v-if="!viewPassword"
                        v-model="password"
                        type="password"
                        :class="formErrors.passwordError === true ? 'has-error' : ''"
                        placeholder="Create your password"
                        @input="calculatePasswordStrength()"
                      >
                      <input
                        v-if="viewPassword"
                        v-model="password"
                        type="text"
                        :class="formErrors.passwordError === true ? 'has-error' : ''"
                        placeholder="Your password"
                        @input="calculatePasswordStrength()"
                      >
                      <a class="password-toggle-switch" @click="toggleViewPassword()"><i :class="viewPassword === true ? 'icon-ban' : 'icon-eye'" /></a>
                    </div>
                    <div class="password-meter">
                      <div :style="{width: passwordScore}" :class="charAdded === true ? strengthClass : ''" class="password-strength" />
                    </div>
                    <p class="form-tip">
                      A good password should be at least 8 characters long, contain a number, a special character (!@#$%), a capital letter
                    </p>

                    <button v-if="!signingUp" class="primary-btn float-right" @click="nextStep()">
                      Continue <i class="icon-arrow-right" />
                    </button>
                  </div>

                  <div v-if="step === 2" class="animated fadeIn">
                    <label>I'm signing up to...</label>
                    <div class="mt-2 mb-2">
                      <!-- :checked="portal.id == currentPortalId" -->
                      <input
                        id="test1"
                        v-model="signupMode"
                        type="radio"
                        name="signup-mode"
                        value="new-organization"
                        checked
                      >
                      <label for="test1">Create and manage an organization</label>
                    </div>
                    <div class="mb-2">
                      <input id="test2" v-model="signupMode" type="radio" name="signup-mode" value="join-organization">
                      <label for="test2">Join an organization</label>
                    </div>
                    <div class="mb-2">
                      <input id="test3" v-model="signupMode" type="radio" name="signup-mode" value="join-training">
                      <label for="test3">Join a training program</label>
                    </div>

                    <div v-if="signupMode ==='new-organization'" class="mt-2 mb-2">
                      <label>Organization Name</label>
                      <input v-model="organizationName" type="text" placeholder="The name of the organization">
                    </div>
                    <div v-if="signupMode ==='join-organization' || signupMode === 'join-training'" class="mt-2 mb-2">
                      <label>Select organization to join</label>
                      <p v-if="loadingOrganizations" class="font-grey">
                        loading organizations...
                      </p>
                      <select v-if="!loadingOrganizations" v-model="organization">
                        <option value="" selected>
                          --Select an organization--
                        </option>
                        <option v-for="organization in organizations" :key="organization._id" value="organization._id">
                          {{ organization.organizationName }}
                        </option>
                      </select>
                    </div>

                    <button class="no-emphasis float-left clear" @click="step=1">
                      Go back
                    </button>
                    <button v-if="!signingUp" class="primary-btn float-right" @click="signup()">
                      Create Account <i class="icon-check" />
                    </button>
                    <button v-if="signingUp" disabled class="primary-btn float-right">
                      Signing you up...
                    </button>
                    <p class="form-tip clear">
                      By signing up, you agree to Holamedic's <a>terms of acceptable use</a>
                    </p>
                  </div>
                </div>

                <hr class="clear">
                <p class="form-tip">
                  Already have an account on Holamedic? <nuxt-link to="/login">
                    Click here
                  </nuxt-link> to login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-8 no-padding">
          <div class="section login-img flex-display not-for-mobile">
            <img src="../assets/img/onboarding.svg" alt="">
          </div>
        </div> -->
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
import Preloader from '~/components/Preloader.vue'
import Header from '~/components/partials/Header.vue'

export default {
  components: {
    Preloader,
    Header
  },
  data () {
    return {
      licenceNumber: '',
      fetchingDetails: false,
      baseUrl: process.env.baseUrl,
      gender: '',
      email: '',
      fullName: '',
      phone: '',
      password: '',
      signupMode: 'new-organization',
      signingUp: false,
      step: 1,
      loadingOrganizations: false,
      organizations: [],
      organizationName: '',
      strengthClass: 'weak',
      passwordScore: '0%',
      charAdded: false,
      viewPassword: false,
      formErrors: {
        nameError: false,
        passwordError: false,
        emailError: false,
        phoneError: false
      }
    }
  },
  beforeMount () {},
  mounted () {
    this.loadOrganizations()
  },
  methods: {
    toggleViewPassword () {
      this.viewPassword = !this.viewPassword
    },
    resetForms () {
      this.licenceNumber = ''
      this.userDetails = ''
    },
    calculatePasswordStrength () {
      let points = 0
      if (this.password.length > 0) {
        this.charAdded = true
      } else {
        this.charAdded = false
        this.passwordScore = '0%'
        points = 0
      }
      // eslint-disable-next-line no-useless-escape
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
      if (format.test(this.password1)) {
        points += 20
      }

      // check for number and caps
      let i = 0
      let character = ''
      while (i <= this.password.length) {
        character = this.password.charAt(i)
        if (!isNaN(character * 1)) {
          points += 10
        // eslint-disable-next-line eqeqeq
        } else if (character == character.toUpperCase()) {
          points += 10
        }
        i++
      }
      if (this.password.length > 8) {
        points += 20
      }

      // assign class
      if (this.password.length > 8 && points < 30) {
        this.strengthClass = 'weak'
      } else if (this.password.length > 8 && points > 30 && points < 75) {
        this.strengthClass = 'medium'
      } else if (this.password.length > 8 && points > 75) {
        this.strengthClass = 'strong'
      }
      this.passwordScore = points + '%'
    },
    nextStep () {
      if (this.fullName === '') {
        this.formErrors.nameError = true
        // return
      }
      if (this.password === '') {
        this.formErrors.passwordError = true
        // return
      }
      if (this.phone === '') {
        this.formErrors.phoneError = true
        // return
      }
      if (this.email === '') {
        this.formErrors.emailError = true
        // return
      }

      console.log('the check ===>', Object.values(this.formErrors).includes(true))

      if (Object.values(this.formErrors).includes(true)) {
        return
      }
      this.step = 2
    },
    async signup () {
      this.signingUp = true
      const requestBody = {
        email: this.email,
        phone: this.phone,
        name: this.fullName,
        password: this.password
      }

      if (this.signupMode === 'new-organization') {
        requestBody.userType = 'ORG_ADMIN'
        requestBody.organization = {
          organizationName: this.organizationName,
          role: 'ADMIN'
        }
      }

      if (this.signupMode === 'join-organization') {
        requestBody.userType = 'ORG_ADMIN'
        requestBody.organizationId = this.organization
      }

      if (this.signupMode === 'join-training') {
        requestBody.userType = 'TRAINEE'
        requestBody.organizationId = this.organization
      }

      try {
        const response = await this.$axios.post(this.baseUrl + 'signup', requestBody)
        if (response.data.status === true) {
          // this.signingUp = false,
          this.$router.push('../signup-success')
        }
      } catch (error) {
        this.signingUp = false
        console.error(error)
        this.$toast.error("Sorry! We couldn't sign you up")
      }
    },
    async loadOrganizations () {
      this.loadingOrganizations = true
      try {
        const response = await this.$axios.get(this.baseUrl + 'organization')
        this.loadingOrganizations = false
        if (response.data.status === true) {
          this.organizations = response.data.data.organizations
        }
      } catch (error) {
        this.loadingOrganizations = false
        console.error(error)
        this.$toast.error("Sorry! We couldn't sign you up")
      }
    }
  }

}
</script>

<style scoped lang="scss">
    .login-img{
        background-color: #f0f0f0
    }
    .login-img img{
        width:50%;
        margin:auto;
    }
    .login-form{
        min-height: 100vh;
        height:inherit;
        transition: all 200ms ease;
    }
    input{
        margin-top:5px;
        margin-bottom:5px;
    }
    .container-fluid{
        padding-top:50px;
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

.password-container{
    position: relative;
}

a.password-toggle-switch{
    position: absolute;
    top:15px;
    right:15px;
    z-index:999;
    color:#666;
}
</style>
