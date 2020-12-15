<template>
<div class="row justify-content-center"><div class="col-lg-10"><div class="card"><div class="card-body"><h4>Create an Order</h4> 

<form id="review-form" @submit.prevent='submitOrder'><div class="form-group"><label for="cars">Choose a product:</label>
<select id="products" name="products" v-model='productName'>
  <option value="js">Jump Starters and Accessories</option>
  <option value="ac">Arts and Craft Toys</option>
  <option value="vp">Vankyo Projectors</option>
  <option value="prv">Pro Robotic Vacuum</option>
  <option value="tth">TaoTronics Headphones</option>
  <option value="epc">Eletric Pressure Cooker</option>
</select ></div>

<div class="form-group"><label for="payment">Choose a payment method:</label>
<select id="payment" name="payment" v-model='Payment'>
  <option value="credit">Credit</option>
  <option value="debit">Debit</option>
</select ></div>

<button v-on:click='cancelOrder' type="submit" class="btn btn-primary">Submit Order</button> <button type="clear" class="btn btn-outline-danger">
            Cancel
          </button> 

    <p v-if='errorMessage' class="form-text text-danger">{{errorMessage}}</p>

          </form></div></div></div></div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            productName: null,
            Payment: null,
            errorMessage: null,
        }
    },
    methods:{
        submitOrder(){
            const myOrder={
                productName: this.productName,
                Payment: this.Payment,
                ProductID: this.$route.params.pk
            };

            console.log('here is the order',myOrder)

            const token = this.$store.state.token;
            axios.post("/orders",myOrder,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/myorders')})
            .catch(()=>{this.errorMessage = "Unable to create an order, please try again later."})
        },
        cancelOrder(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>