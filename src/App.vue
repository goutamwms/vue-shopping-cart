<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <NavBar />
      <div class="my-8">
        <div class="container mx-auto px-6">
          <router-view />
      </div>
    </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>


