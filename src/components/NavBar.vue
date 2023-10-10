<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border-0 border-b-2 border-gray-200 bg-white">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      
      <div class="flex md:hidden" >
        <button class="text-gray-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  outline-none focus:outline-none" type="button">
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
  
      <router-link to="/" class="font-bold leading-relaxed inline-block mr-4 py-2 uppercase">LOGO</router-link>
      <div>

      <CartIcon/>
    </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from "@/components/CartIcon";
export default {
  name: "NavBar",
   components: {
    CartIcon
  }
};
</script>