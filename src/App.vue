<template>
  <div id="app">
    <div id="nav">
      <Header/>
      
    
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    
  }
}
</script>
<style>

</style>
