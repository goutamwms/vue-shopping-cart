import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/views/Shop'
import Checkout from '@/views/Checkout'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    { 
      path: "*", 
      component: PageNotFound 
    }
  ]
})
