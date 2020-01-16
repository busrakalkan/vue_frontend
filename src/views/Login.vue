<template>
  <div class="login">
    <Login/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login,
    Footer
  }
}
</script>