<template>
<div>
    <h1>Login</h1>
    <div v-if='this.$route.query.signupsuccess' class='alert alert-success'>Thanks for signing up! Please log in now.</div>
<form @submit.prevent='onSubmit'>
    
    <div class="form-group"><label for="exampleInputEmail1">Email address</label> 
    <input type="email" id="exampleInputEmail1" required="required" placeholder="Enter email" class="form-control" v-model='email'></div> 
    
    <div class="form-group"><label for="exampleInputPassword1">Password</label> <input type="password" id="exampleInputPassword1" placeholder="Password" required="required" class="form-control" v-model='password'></div> 

    <center><button type="submit" class="btn">Submit</button></center> 

    <p class='form-text text-danger' v-if="credentialsError">Invalid credentials</p>
    <p class='form-text text-danger' v-if="loginError">Could not log you in. Try again later.</p>
</form>
</div>
</template>


<script>

import axios from 'axios';

export default {
    data(){
        return{
            email: '',
            password:'',
            loginError: false,
            credentialsError: false
        }
    },
    methods:{
        onSubmit(){
                const myFormData={
                    email: this.email,
                    password: this.password
                }
                //console.log('form data: ', myFormData)

                axios.post('/contacts/login', myFormData)
                .then(myResponse=>{
                    console.log('here is my response',myResponse);

                    this.$store.commit("storeTokenInApp", myResponse.data.token);
                    this.$store.commit("storeUserInApp", myResponse.data.user);

                    this.$router.replace('/myorders')
                })
                .catch((myError)=>{
                    console.log("my error:",myError.response.data)
                    
                    if(myError.response.data == 'Invalid user credentials'){
                        this.credentialsError = true
                    }else
                    {this.loginError = true}
            })
                    
        }
    } 
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Mansalva&family=Patrick+Hand&display=swap');

h1   {font-family: 'Kalam', cursive;
color: #6C3483;
padding: 30px;
font-weight: bolder;
    }

.form-group{
    font-family: 'Kalam', cursive;
    justify-content: center;
}

h3    {font-family: 'Kalam', cursive;
color: #AF7AC5;}

.btn {
    background: #AF7AC5;
    color: #FDFEFE ;
    padding: 8px;
    margin: 2px;
    font-weight: bold;
}

</style>