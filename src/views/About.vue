<template>
  <div class="about">
    <div class="post"
    v-for="(post,index)in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    >
     <p class="text">{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
import PostServer from '../PostServer';

export default {
  name:'About',
  data(){
    return {
      posts:[],
      error:'',
      text:''
    }
  },
  async created(){
    try{
      this.posts=await PostServer.getPosts();
    }catch(err){
      this.error=err.message;
    }
  }
}
</script>