<template>
<div>
    <center><h1>Orders</h1></center>
    <hr/>
    <h3>{{firstName}}'s Orders &#128717;&#65039;</h3>

    <p v-if='accountError' class='form-text text-danger'>Cannot get your account orders. Please try again later.</p>

    <table v-if='ordersByUser' class='table table-striped table-bordered'>
        <thead>
            <th>Product Name</th>
            <th>Payment</th>
        </thead>

        <tbody>
            <tr v-for='thisOrder in ordersByUser' :key='thisOrder.OrderID'>
                <th><router-link :to='`/products/${thisOrder.ProductID}`'>{{thisOrder.productName}}</router-link></th>
                <th>{{thisOrder.Payment}}</th>
            </tr>
        </tbody>
    </table>

</div>
</template>


<script>

import axios from 'axios';

export default {
    data(){
        return{
            ordersByUser: null,
            accountError: false
        }
    },
    computed: {
        firstName(){
            return this.$store.state.user.NameFirst}
        },
        created(){
            axios.get("/orders/me", {
                headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
            .then((response)=>{
                console.log('this is /orders/me response:', response)
                this.ordersByUser = response.data})
                
                .catch(()=>{
                    this.accountError = true
                })
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
h3    {font-family: 'Kalam', cursive;
color: #AF7AC5;
font-size: 45px;}

table{
   font-family: 'Kalam', cursive;
color: #6C3483;
padding: 37px;
font-weight: bolder; 
font-size: 20px;
}
</style>