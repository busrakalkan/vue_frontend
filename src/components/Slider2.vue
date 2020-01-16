<template>
    <div class="deneme" >
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333; style=width:720px; height:400px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        
        >
        <!-- Text slides with image -->
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/theBalm-makyaj-kategori-1211 (1).jpg"></template></b-carousel-slide>
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/Physicians-makyaj-kategori-1211.jpg"></template></b-carousel-slide>
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/Beaulis-makyaj-kategori-1211.jpg"></template></b-carousel-slide>
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/wetnwild-makyaj-kategori-1211.jpg"></template></b-carousel-slide>
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/Eklips-makyajmalze-kategori-1211.jpg"></template></b-carousel-slide>
        <b-carousel-slide><template v-slot:img><img style="width:720px; height:400px" src="@/assets/Bee-Beauty-makyaj-temizleme-kategori-1211.jpg"></template></b-carousel-slide>
        

        </b-carousel>
    </div>
</template>

<script>

export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>