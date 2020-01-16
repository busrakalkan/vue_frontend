<template>
  <div class="register">
    <Register/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'home',
  components: {
    Register,
    Footer
  }
}
</script>