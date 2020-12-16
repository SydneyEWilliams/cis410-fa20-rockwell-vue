<template>
<div>
    <div class="card">
        <div class="card-body">
                <center><h2>{{product.productName}}</h2>
                <br/>
                <p>Product Category: <br/> {{product.CategoryName}}</p>
                <p>Price: <br/>${{product.productPrice}}</p>
                <p>For any additional info on specific products, contact us!</p>
                <img src='https://cdn.shopify.com/s/files/1/0020/7598/3935/files/contactus8_large.jpg?v=1529704019' ></center>
        </div>
    </div>

    <br/>

    <router-link v-if="auth" :to="`/products/${this.$route.params.pk}/order`">
    <center><button type="button" class="btn">Create Order &#128722;</button></center>
    </router-link>

    <router-link v-else :to="`/signin`">
    <center><button type="button" class="btn btn-outline">Sign In to Create Order</button></center>
    </router-link>

    <br/>
    <br/>
    <router-view></router-view>

</div>
</template>


<script>
export default {
    computed:{
        product(){
            var products = this.$store.state.products;
            var thisProduct = products.find((aProduct)=> aProduct.ProductID == this.$route.params.pk)

            //console.log("here is the product you want", thisProduct);
            return thisProduct
        },
        auth(){
            return this.$store.state.token
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Mansalva&family=Patrick+Hand&display=swap');

.card   {font-family: 'Kalam', cursive;
color: #6C3483;
padding: 30px;
margin: 30px;
background-image: linear-gradient(#D8BFD8, #E6E6FA);
border: rebeccapurple;
font-weight: bolder;
    }

h3    {font-family: 'Kalam', cursive;
color: #AF7AC5;
font-size: 45px;}

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