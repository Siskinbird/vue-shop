import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '@/views/Shop'
import NotFound from '@/views/404'
import Home from "@/views/Home";
import Product from "@/views/Product";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  } ,
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'product',
    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
