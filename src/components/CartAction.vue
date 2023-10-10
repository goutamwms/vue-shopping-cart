<template> 
    <div class="flex items-center w-2/3">
        <span class="w-1/3 h-8 rounded-l-md border border-l-1 border-t-1 border-b-1 border-gray-300 bg-gray-100 text-gray-400 font-bold text-center cursor-pointer" @click="removeItem" :disabled="!cproduct.quantity">-</span>
        <span class="flex justify-center items-center border border-t-1 border-b-1 border-gray-300 w-1/3 h-8 text-gray-400 text-sm px-2">{{cproduct.quantity}}</span>       
        <span class="w-1/3 h-8 rounded-r-md border border-1 border-green-400 bg-green-100 text-green-400 font-bold text-center cursor-pointer" @click="addItem">+</span>
    </div>             
</template>

<script>
import {  mapGetters } from "vuex";
export default {
  name: "CartAction",
  props: {
        product: {
            type: Object,
            required: true
        }
    },
   data () {
        return {
            item: this.product
        }
    }, 
   methods: {
    addItem() {
      this.$store.dispatch("addItem", this.item);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.item);
    }
  }, 
  computed: {
    cproduct() {
      const findItem = this.cartItems.find(
        element => element.id === this.item.id
      );
      if (findItem) {
        return findItem;
      } else {
        return {
          id: this.item.id,
          name: this.item.name,
          price: this.item.price,
          description: this.item.description,
          quantity: 0
        };
      }
    },
    ...mapGetters(["cartItems"])
  }
};

</script>