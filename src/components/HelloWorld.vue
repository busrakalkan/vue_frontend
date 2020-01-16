<template>
  <div class="deneme">
    <p>{{ error }}</p>
    <input v-model="istek">
    <button v-on:click="get(istek)">sırala</button>
    <div class="post"
      v-for="(post, index) in posts"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
    >
     <p class="text">{{ post.marka }}</p>
     
    </div>
  </div>
  
</template>

<script>
//import SepetServer from '../SepetServer'
import UrunServer from '../UrunServer'
export default {
  name:'HelloWorld',
  data(){
    return {
      posts:[],
      error:'',
      istek:''
    }
  },
 /* async created(){
    try{
      this.posts=await SepetServer.getPosts();
    }catch(err){
      this.error=err.message;
    }
  },*/
  methods:{
      async get(istek){
        try{
            this.posts=await UrunServer.getPosts(istek);
        }catch(err){
          this.error=err.message;
        }
      }
  }
  
}
</script>