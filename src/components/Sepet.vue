<template>
    <div class="Sepet" style="height: 500px;">
        <div>
            <h3>Sepet Sayfası</h3>
            <h4>{{error}}</h4>
        </div>
        <div>
            
            <div class="post"
                v-for="(post, index) in sepet"
                v-bind:item="post"
                v-bind:index="index"
                v-bind:key="post._id"
            >
            <g-productcard style="width: 20%;float: left;">
                <img v-bind:src="post.img" style="width: 180px;height: 150px;">
                <p> {{ post.ad }}</p>
                <p> Ürün adedi: {{ post.adet }} </p>
                <p> Ürün fiyatı: {{ post.fiyat }}*{{ post.adet}}</p>
                
                <b-button style="width: 80px;margin-left: 7px;" v-on:click="arttır(index)"> arttır</b-button>
                <b-button style="width: 80px;margin-left: 7px;" v-on:click="del(index)">Sil</b-button>
            </g-productcard>
            </div>
        </div>
    </div>
</template>

<script>
import SepetServer from '../SepetServer'

export default {
    name: 'Sepet',
    data() {
        return {
        error:'',
        sepet: [],
        temp:''
        }
    },
    async created() {
            try{
                this.sepet = await SepetServer.getSepet();
            }catch(err){
                this.error = err.message;
            }
    },
    methods:{
        
        async arttır(index) {
            //console.log() ;
            try{
                await SepetServer.updateSepet(this.sepet[index]._id);
                this.sepet = await SepetServer.getSepet();
            }catch(err){
                this.error = err.message;
            }
        },
        async del(index) {
            //console.log() ;
            try{
                await SepetServer.deletePost(this.sepet[index]._id);
                this.sepet = await SepetServer.getSepet();
            }catch(err){
                this.error = err.message;
            }
        }
    }
}
</script>