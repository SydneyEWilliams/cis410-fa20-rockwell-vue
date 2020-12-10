<template>
<div>
    <h1>Orders</h1>
    <hr/>
    <h3>{{firstName}}'s Orders</h3>

    <p v-if='accountError' class='form-text text-danger'>Cannot get your account orders. Please try again later.</p>

    <table v-if='ordersByUser' class='table'>
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
            return this.$store.state.user.NameFirst
        },
        created(){
            axios.get("/orders/me", {
                headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            }).then((response)=>{
                console.log('this is /orders/me response:', response)
                this.ordersByUser = response.data})
                .catch(()=>{
                    this.accountError = true
                })
        }
    }
}
</script>

<style scoped>

</style>