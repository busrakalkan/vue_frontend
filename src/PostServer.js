import axios from 'axios';

const url = 'http://localhost:5000/api/sort';

class PostService{
    //Get Posts
    static sort(){
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
    static sortPrice(){
        return new Promise (async (resolve, reject) =>{
            try{
                const res = await axios.get(url+'/af');
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
    static sortPriceHigh(){
        return new Promise (async (resolve, reject) =>{
            try{
                const res = await axios.get(url+'/cf');
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
     static insertPost(text){
         return axios.post(url,{
             text
         } );
     }


     //Delete Posts
     static deletePost(id){
         return axios.delete(`${url} ${id}`);
     }
}


export default PostService