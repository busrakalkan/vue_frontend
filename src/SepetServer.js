import axios from 'axios';

const url = 'http://localhost:5000/api/sepet';

class Sepet{
    //Get Posts
    static getSepet(){
     return new Promise (async (resolve, reject) =>{
         try{
             const res = await axios.get(url);
             const data = res.data;
             resolve(
                 data.map(post => ({
                     ...post,
                 }))
             );

         }catch(err){
             reject(err);
         }
     })
    }
    //update sepet
    static updateSepet(id){
        return axios.post(url+'/insert',{
            id
        });
    }
    
    
     //create Posts
     static insertPost(ad,fiyat,img){
         return axios.post(url,{
             ad,
             fiyat,
             img
         } );
     }
     //Delete Posts
     static deletePost(id){
        return axios.delete(url+'/'+id);
     }
     
}

export default Sepet