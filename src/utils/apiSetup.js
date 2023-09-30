
import axios from "axios"

const base_URL = 'https://api.themoviedb.org/3'

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers={
    Authorization:"bearer "+TMDB_TOKEN,
    
}

export  async function fetchData(url,params){
    try{
      const {data} = await axios.get(base_URL+url,{
        // headers:headers,
        // params:params
        headers,
        params
      })
      return data   
    }
    catch(error){
        return error
    }
}