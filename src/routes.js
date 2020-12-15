import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import MyOrders from './components/MyOrders.vue';
import Login from './components/Login.vue';
import ProductDetail from './components/ProductDetail.vue';
import Products from './components/Products.vue';
import NotFound from './components/NotFound.vue';
import OrderCreate from './components/OrderCreate.vue';
import Signup from './components/Signup.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/myorders', component: MyOrders},
    {path: '/signin', component: Login},
    {path: '/products', component: Products},
    {path: '/products/:pk', component: ProductDetail,
        children: [
            {path:'order', component: OrderCreate}
        ]},
    {path: '/signup', component: Signup},
    {path: '/:invalid route(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})