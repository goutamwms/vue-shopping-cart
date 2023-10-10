<template>      
    <div class="flex items-center justify-end w-1/3">
          <button class="w-16 h-8 rounded-md  bg-green-600 text-white text-center" @click="addItem">ADD</button>
    </div>
</template>

<script>
export default {
  name: "AddToCart",
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
    }
  },
};
</script>