<template>
  <div class="sepet">
    <Sepet/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Sepet from '@/components/Sepet.vue'

export default {
  name: 'sepet',
  components: {
    Sepet,
    Footer
  }
}
</script>