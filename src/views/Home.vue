<template>
  <div class="home">    
    <HelloWorld/>
    <Slider1/>
    <HomeMain/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import HomeMain from '@/components/HomeMain.vue'
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HomeMain,
    Footer,
    HelloWorld
  }
}
</script>
