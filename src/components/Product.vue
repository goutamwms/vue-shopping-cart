<template>
        <div class="rounded-lg shadow-lg bg-white space-y-10 p-5">	              
                <div class="flex items-center justify-between space-x-3">
                    <a class="font-bold uppercase text-md text-gray-500 h-12 overflow-hidden">
                        {{item.name}} 
                    </a>
                    <span class="font-bold text-lg text-blue-500 h-12">{{item.price.toFixed(2) | currency}}</span>
                </div> 
                <p class="text-gray-500 text-sm">{{item.description}}</p>
                <div class="flex items-center justify-between space-x-5 w-full">
                    <CartAction :product="item"/>
                    <AddToCart :product="item"/>
                </div>               
		</div>
</template>

<script>
import AddToCart from "@/components/AddToCart";
import CartAction from "@/components/CartAction";
export default {
  name: "Product",
  components: {
    AddToCart,
    CartAction
  },
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
    filters: {
        currency:function(val)
        {
        return '$'+val;
        }
    },
};
</script>