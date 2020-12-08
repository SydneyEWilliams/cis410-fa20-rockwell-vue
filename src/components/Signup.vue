<template>
<div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
        <div class='form-group'><label for="fname-input">First Name</label>
        <input type='text' id='fname-input' required='required' placeholder="First Name" class='form-control' v-model="nameFirst">
        </div>

        <div class='form-group'><label for="lname-input">Last Name</label>
        <input type='text' id='lname-input' required='required' placeholder="Last Name" class='form-control' v-model="nameLast">
        </div>

        <div class='form-group'><label for="email-input">Email address</label>
        <input type='email' id='email-input' required='required' placeholder="Email" class='form-control' v-model="email">
        <small v-if="dupeEmail" class='form-text text-danger'>Please choose a different email</small>
        </div>

        <div class='form-group'><label for="password-input">Password</label>
        <input type='password' id='password-input' required='required' placeholder="Password" class='form-control' v-model="password">
        </div>

        <button type='submit' class='btn btn-primary'>Submit</button> <p id='error-signup' class='text-danger'>{{errorMessage}}</p>
    </form>
</div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            nameFirst:'',
            nameLast:'',
            email:'',
            password:'',
            errorMessage:'',
            dupeEmail: false
        }
    },
    methods:{
        onSubmit(){

            const myFormData ={
                nameFirst: this.nameFirst,
                nameLast: this.nameLast,
                email: this.email,
                password: this.password
            }
            //console.log(myFormData)

            axios.post('/contacts', myFormData)
            .then((myResponse)=>{
                this.$router.replace('/signin?signupsuccess=true')
            })

            .catch((myError)=>{
                if(myError.res.status === 409){
                    this.dupeEmail = true
                }
                else{
                    this.errorMessage = "Cannot sign you up. Please try again later."
                }
            })
        }
    }
}
</script>

<style scoped>

</style>