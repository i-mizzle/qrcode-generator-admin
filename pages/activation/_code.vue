<template>
    <section>
        <Header />
        <div class="section flex-display">
            <div class="container animated fadeIn">
                <div class="row">
                    <div class="col-md-5 ml-auto mr-auto">
                        <div class="">
                            <div class="login-container shadowed-box">
                                <h3 class="title">One last thing...</h3>
                                <p>We're almost done, just set up your password so you can log in.</p>
                                <input type="password" v-on:input="calculatePasswordStrength()" v-bind:class="formErrors.passwordError === true ? 'has-error' : ''" v-model="password1" placeholder="Your password">
                                <div class="password-meter">
                                    <div v-bind:style="{width: passwordScore}" v-bind:class="charAdded === true ? strengthClass : ''" class="password-strength"></div>
                                </div>
                                <p class="form-tip">A good password should be at least 8 characters long, contain a number, a special character (!@#$%), a capital letter</p>
                                <input type="password" v-model="password2" v-bind:class="{ 'has-error': formErrors.passwordError}" placeholder="Confirm your password">

                                <button class="secondary-btn" v-if="!processing" @click="activateAccount()">Activate your account</button>
                                <button class="secondary-btn" v-if="processing" disabled>Activating your account...</button>
                            </div>
                            <hr>
                            <p>Aready have an account on Holamedic? <nuxt-link to="/login">Click here</nuxt-link> to login </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Header from '~/components/partials/Header.vue'

export default {
  components: {
      Header
  },
  data() {
        return {
            password1:'',
            password2:'',
            strengthClass: 'weak',
            passwordScore: '0%',
            charAdded: false,
            baseUrl: process.env.baseUrl,
            processing: false,
            formErrors: {}
        }
    },  
    computed: {},
    methods: {
        calculatePasswordStrength() {
            let points = 0;
            if(this.password1.length > 0){
                this.charAdded = true
            }else {
                this.charAdded = false
                this.passwordScore = '0%'
                points = 0
            }
            var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
            if(format.test(this.password1)){
                points += 20
            }

            // check for number and caps
            var i=0;
            var character='';
            while (i <= this.password1.length){
                character = this.password1.charAt(i);
                if (!isNaN(character * 1)){
                    points += 10
                }else{
                    if (character == character.toUpperCase()) {
                    points += 10
                    }
                }
                i++;
            }
            if(this.password1.length > 8){
                points += 20
                console.log(points)
            }

            // assign class
            if(this.password1.length > 8 && points < 30){
                this.strengthClass = 'weak'
            } else if (this.password1.length > 8 && points > 30 && points < 75){
                this.strengthClass = 'medium'
            } else if(this.password1.length > 8 && points > 75) {
                this.strengthClass = 'strong'
            }
            this.passwordScore = points + '%'
        },

        async activateAccount() {
            if(this.password1 === ''){
                return
            }
            const payload = {
                "password":this.password1,
            }
            this.processing = true
            try{
                const activationResponse = await this.$axios.put(this.baseUrl+ 'confirm/' + this.$route.params.code, payload)
                this.$toast.success('Your account has been activated, you can now login')
                this.$router.push('../login')

            } catch(e){
                this.$toast.error(e.response.data.message)
                this.processing = false
            }
        }
    },
    mounted(){
        console.log(this.$route.params.code)
    }
}
</script>

<style scoped>
.section{
    background-color:#ececec;
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
    color:#3f3d3dd4;
}
a{
    font-weight:700;
}
a.hover{
    color:#fffffffd;
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
