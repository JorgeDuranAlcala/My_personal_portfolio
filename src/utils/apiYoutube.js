import axios from "axios";

export const getDataFromYtbAPI = async () => {

    try{

      const { items } = (await axios.get('http://localhost:4000/ytb')).data

      return items
        
    } catch(error) {
        console.log(error)
    }
}

/* export const getVideoFromYtb = async id => {
    try {

       const res =  (await axios.post('http://localhost:4000', { id })).data
    
        console.log(res)

       return data.items[0].player; 
        
    } catch (error) {
        console.log(error)
    }
} 
*/