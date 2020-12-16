<template>
<div class="row justify-content-center"><div class="col-lg-10"><div class="card"><div class="card-body"><h4>Create an Order</h4> 

<br/>

<form id="review-form" @submit.prevent='submitOrder'><div class="form-group"><label for="order">&#128722; Choose a product:</label>
<select id="products" name="products" v-model='productName'>
  <option value="js">Jump Starters and Accessories</option>
  <option value="ac">Arts and Craft Toys</option>
  <option value="vp">Vankyo Projectors</option>
  <option value="prv">Pro Robotic Vacuum</option>
  <option value="tth">TaoTronics Headphones</option>
  <option value="epc">Eletric Pressure Cooker</option>
</select ></div>

<div class="form-group"><label for="payment">&#128179; Choose a payment method:</label>
<select id="payment" name="payment" v-model='Payment'>
  <option value="credit">Credit</option>
  <option value="debit">Debit</option>
</select ></div>

<button type="submit" class="btn" style="background:green">Submit Order</button> 

<button v-on:click='cancelOrder' type="clear" class="btn" style="background:red">
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
                payment: this.Payment,
                productID: this.$route.params.pk
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
            this.$router.go(-1);
         }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Mansalva&family=Patrick+Hand&display=swap');

.card   {font-family: 'Kalam', cursive;
color: #6C3483;
padding: 30px;
font-weight: bolder;
    }
h3    {font-family: 'Kalam', cursive;
color: #AF7AC5;
font-size: 45px;}

h4{
    font-weight: bolder;
    padding: 0px;
}

.review-form{
    border: rebeccapurple;
}

h2{font-family: 'Kalam', cursive;
color: #AF7AC5;
font-size: 45px;}

p{
    font-size: 25px;
}

.btn {
    font-family: 'Kalam', cursive;
    background: #6C3483;
    color: #FDFEFE ;
    padding: 8px;
    margin: 2px;
}

</style>