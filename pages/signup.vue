<template>
    <section>
        <Header/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 no-padding">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="login-form flex-display">
                                <div class="">
                                    <h3 class="title">Start finding per diem opportunities</h3>
                                    <p>Just give us your licence number and we'll get started </p>
                                    <div class="underline"></div>

                                    <input type="text" placeholder="Eg: 58682392221748" v-model="licenceNumber" :disabled="userDetails !== ''">
                                    <button v-if="!fetchingDetails && userDetails === ''" @click='verifyLicense()' class="secondary-btn float-right">Get started</button>
                                    
                                    <div v-if="fetchingDetails" class="text-center">
                                        <Preloader /><br>
                                        <p class="form-tip">Confirming your license...</p>
                                    </div>

                                    <div v-if="!fetchingDetails && userDetails !== ''">
                                        <p class="form-tip">Here are your details as gotten fron your licensing body, you can signup with these details or use another. <br>You could also update your phone number and/or email to active ones</p>
                                        <label>Full name</label>
                                        <input type="text" v-model="userDetails.name.fullName" disabled>
                                        <label>Gender</label>
                                        <input type="email" v-model="userDetails.gender" disabled>
                                        <label>Email</label>
                                        <input type="email" v-model="userDetails.email">
                                        <label>Phone number</label>
                                        <input type="email" v-model="userDetails.phone">


                                        <button v-if="userDetails !== '' && !signingUp" @click='signupUser()' class="secondary-btn float-right">Confirm and signup</button>
                                        <button v-if="userDetails !== '' && signingUp" disabled class="secondary-btn float-right">Signing you up...</button>
                                        <button v-if="userDetails !== ''" @click='resetForms()' class="no-emphasis">Change licence</button>
                                        <p class="form-tip"> By signing up, you agree to Holamedic's <a>terms of acceptable use</a></p>
                                    </div>

                                    <hr class="clear">
                                    <p class="form-tip">Already have an account on Holamedic? <nuxt-link to="/login">Click here</nuxt-link> to login </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 no-padding">
                    <div class="section login-img flex-display not-for-mobile">
                        <img src="../assets/img/onboarding.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Preloader from '~/components/Preloader.vue'
import Header from '~/components/partials/Header.vue'

export default {
    components:{
        Preloader,
        Header
    },
    data() {
        return {
            licenceNumber: '',
            fetchingDetails: false,
            baseUrl: process.env.baseUrl,
            userDetails: '',
            signingUp: false
        }
    },
    methods: {
        resetForms(){
            this.licenceNumber = '';
            this.userDetails = '';
        },
        async verifyLicense() {
            if(this.licenceNumber === ''){
                return
            }
            this.fetchingDetails = true
            try {
                const response = await this.$axios.get(this.baseUrl + 'verify/' + this.licenceNumber);
                console.log(response);
                if (response.data.status === true) {
                    this.fetchingDetails = false,
                    this.userDetails = response.data.data.licenceHolderDetails;
                    this.userDetails.name.fullName = response.data.data.licenceHolderDetails.name.first + ' ' + response.data.data.licenceHolderDetails.name.last
                }
            } catch (error) {
                this.fetchingDetails = false;
                console.error(error);
                this.$toast.error("Sorry! We couldn't verify your licence")
            }
        },
        async signupUser() {
            this.signingUp = true
            const requestBody = {
                email: this.userDetails.email, 
                name: this.userDetails.name.fullName,
                medicalLicence: {
                    licenceNo: this.licenceNumber, 
                    licensingBody: 'MCDN'  
                }
            }
            console.log(requestBody);
            try {
                const response = await this.$axios.post(this.baseUrl + 'signup', requestBody);
                console.log(response);
                if (response.data.status === true) {
                    // this.signingUp = false,
                    this.$router.push('../signup-success')
                }
            } catch (error) {
                this.signingUp = false;
                console.error(error);
                this.$toast.error("Sorry! We couldn't sign you up")
            }
        }
    },
    beforeMount(){},
    mounted(){}  
    
}
</script>

<style scoped lang="scss">
    .login-img{
        background-color: #f0f0f0
    }
    .login-img img{
        width:70%;
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
</style>