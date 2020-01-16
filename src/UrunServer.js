import axios from 'axios';

const url = 'http://localhost:5000/api/posts';

class Uye{
    //Get Posts
    static getPosts(text){
     return new Promise (async (resolve, reject) =>{
         try{
             const res = await axios.get(url+'/'+text);
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
    //fitrele
    static getFiltre(checked){
        return new Promise (async (resolve, reject) =>{
            try{
                const res = await axios.get(url,{checked});
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