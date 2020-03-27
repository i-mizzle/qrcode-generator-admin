<template>
    <section>
        <Header />
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 no-padding">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="login-form flex-display">
                                <div class="">
                                    <h3 class="title">Login to your account</h3>
                                    <p>You can log in with your email address and your password </p>
                                    <div class="underline"></div>
                                    
                                    <label>Email</label>
                                    <input type="email" placeholder="Your email address" v-model="email">

                                    <label>Password</label>
                                    <input type="password" placeholder="Your password" v-model="password">
                                    
                                    <div class="col-md-12">
                                        <button v-if="!processing" @click='login()' class="secondary-btn float-right">Log in to your account</button>
                                        <button v-if="processing" disabled class="secondary-btn float-right">Logging you in...</button>
                                    </div>
                                    <hr class="clear">
                                    <p class="form-tip">Don't have an account on Holamedic? <nuxt-link to="/signup">Click here</nuxt-link> to signup </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 no-padding">
                   <div class="section login-img flex-display not-for-mobile">
                        <img src="../assets/img/login.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Header from '~/components/partials/Header.vue'

export default {
    components:{
        Header
    },
    data() {
        return {
            processing: false,
            email: '',
            password: '',
            baseUrl: process.env.baseUrl,
        }
    },
    methods: {
        async login() {
            this.processing = true
            const requestBody = {
                email: this.email, 
                password: this.password,
            }
            console.log(requestBody);
            try {
                const response = await this.$axios.post(this.baseUrl + 'login', requestBody);
                console.log(response);
                if (response.data.status === true) {
                    // this.signingUp = false,
                    this.$router.push('../user-area/dashboard')
                }
            } catch (error) {
                this.processing = false;
                console.error(error);
                this.$toast.error("Sorry! We couldn't log you in")
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
    .login-form{
        height: 100vh;
    }
    .login-img img{
        width:60%;
        margin:auto;
    }

</style>