import axios from 'axios';

const url = 'http://localhost:5000/api/uye';

class Uye{
    //Get Posts
    static getPosts(){
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
     //create Posts
     static insertPost(ad,soyad,email,sifre){
         return axios.post(url,{
             ad,
             soyad,
             email,
             sifre
         } );
     }
     //Delete Posts
     static deletePost(id){
         return axios.delete(`${url} ${id}`);
     }
}

export default Uye