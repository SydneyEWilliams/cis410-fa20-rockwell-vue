<template>
<div>
    <div class="card">
        <div class="card-body">
                <h2 class="text-primary">{{product.productName}}</h2>
                <br/>
                <p>Product Category: <br/> <strong>{{product.CategoryName}}</strong></p>
                <p>Price: <br/> <strong>${{product.productPrice}}</strong></p>
                <p>For any additional info on specific products, contact us!</p>
        </div>
    </div>

    <br/>

    <router-link v-if="auth" :to="`/products/${this.$route.params.pk}/order`">
    <button type="button" class="btn btn-success">Create Order</button>
    </router-link>

    <router-link v-else :to="`/signin`">
    <button type="button" class="btn btn-outline-success">Sign In to Create Order</button>
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

</style>