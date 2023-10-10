<template>
  <div class="space-y-4 lg:w-2/3">
    <div class="flex items-center text-gray-400">
      <router-link to="/" class="inline-flex" >
        <button class="text-gray-400 cursor-pointer text-xl leading-none  border border-solid border-transparent rounded bg-transparent blockoutline-none focus:outline-none" type="button" >        
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
    </button> 
    <span class="font-semibold ml-1">BACK</span>
      </router-link>
    </div>

    <div v-if="purchased && !cartItems.length" class="text-gray-700 text-sm font-semibold uppercase">You have purchased all items</div>
    <div v-else-if="!cartItems.length" class="text-gray-700 text-sm font-semibold uppercase">Your Cart is empty</div>

    <template v-else>
    
    <h3 class="text-gray-700 text-xl font-bold uppercase">Summary</h3>
            
      <div class="flex items-top justify-between space-x-2" v-for="(item, index) in cartItems" :key="index">     
          <span class="font-semibold text-md text-gray-500">{{item.quantity + 'X'}}</span>
          <span class="font-semibold uppercase text-md text-gray-500"> {{item.name}}</span>
          <span class="font-bold text-lg text-blue-500"> {{(item.price * item.quantity).toFixed(2) | currency}}</span>
      </div>


        <hr>
        <div class="flex items-top justify-between mt-5">
          <div class="font-bold uppercase text-md text-gray-500 h-12">Total Amount</div>
          <div class="font-bold text-xl text-blue-500"> {{cartTotal | currency}}</div>
       </div>
      
        <div class="mt-5">
          <button class="w-full lg:w-64 h-12 rounded-md bg-green-600 text-white font-bold" @click="pay">PAY NOW</button>
        </div> 
        
    

    </template>

  </div>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
  name: "Checkout",
  data () {
        return {
            purchased: false
        }
    },
  filters: {
    currency:function(val)
    {
      return '$'+val;
    }
  },
  computed: {
    ...mapGetters(["cartItems","cartTotal"]),
   },
   methods: {
      pay(){
        this.$store.dispatch('pay').then(() => {
          //this.$router.push('/')
          this.purchased = true
        })
      }
    
   }
}
</script>