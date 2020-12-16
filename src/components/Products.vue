<template>
<div>
    <!-- changed to reflect new api that works -->
    <center><h1>Products</h1> </center>
    <!-- <hr/> -->

    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Product Name</th>
                <!-- <th>Product Category</th> -->
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for='thisProduct in products' :key="thisProduct.ProductID">
                <th>{{thisProduct.productName}}</th>
                <!-- <td>{{thisProduct.CategoryName}}</td> -->
                <td>${{thisProduct.productPrice}}</td>
                <td>
                    <router-link :to='`/products/${thisProduct.ProductID}`'>
                        <button type="button" class="btn btn-primary">Details</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>


<script>
export default {
    computed:{
        products(){
           return this.$store.state.products
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