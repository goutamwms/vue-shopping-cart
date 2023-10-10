<template>
  <div>
    <h3 class="text-gray-700 text-xl font-bold uppercase">REPLACE WIPER BLADES</h3>
            <div class="mt-3 text-sm text-gray-500">Front wiper blades are supplied as a "pair" unless otherwise requested, rear wiper blades are a "single" unit.
                (Fitting just the individual drivers or pessanger wiper blade is not recommended)
            </div>
      <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 w-full mt-6">
        <Product v-for="product in products" :key="product.id" :product="product"/>
      </div>
      <div class="mt-5" v-if="cartQuantity">
        <router-link to="/checkout">
          <button class="w-full lg:w-64 h-12 rounded-md bg-green-600 text-white font-bold">CHECKOUT</button>
        </router-link>
      </div> 


      <div class="mt-5">
        <p class="mb-3">Debounse and auto complete</p>

        <div class="bg-red-100 p-3 h-200">
          <input type="text" v-on:input="debounceInput" v-model="searchInput" :class="{'is-loading': loading}">
        </div>

        <div class="bg-blue-100 p-3 h-200" v-if="items.length && !loading">
          <ul>
            <li v-for="item in items" :key="item.id" >{{item.name}}</li>
          </ul>
        </div>

      </div>  
  </div>
</template>

<script>
import {  mapGetters } from "vuex";
import Product from "@/components/Product";
import debounce from "lodash.debounce";
import axios from "axios";

export default {
  name: "Shop",
  components: {
    Product,
  },
  computed: {
    ...mapGetters(["products","cartQuantity"]),
    updateValueDebounced() {
      return debounce(this.updateValue, 1000);
    },
    debouncedModel: {
      get() { return this.value; },
      set(value) { this.updateValueDebounced(value); }
    },
  },
  /*
  data : {
      return {
        searchInput : '',
        filterKey : ''
      }
  },
  
  methods : {
    search() {

    }
  },
  watch : {

  }*/
  data() {
      return {
        loading : false,
        items : [],
        searchInput : '',
        filterKey : ''
      }
  },
  methods: {
    updateValue(value) {
      
      
      console.log(value)
      this.$emit('input', value);

      this.loading = true;
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.items = response.data))
        .finally(() => {
              this.loading = false  
              console.log(JSON.stringify(this.items))
          });

          
      },

      debounceInput: debounce(function () {
        this.filterKey = this.searchInput;

        this.loading = true;
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.items = response.data))
        .finally(() => {
              this.loading = false  
              console.log(JSON.stringify(this.items))
          });
      }, 500)
    },
  
  watch: {
  searchInput: function () {
    this.debounceInput();
  }
},
  
};
</script>

<style scoped>
  .is-loading {
     font-size : small 
  }
</style>


