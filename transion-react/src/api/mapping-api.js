import axios from 'axios';
import { mappingUrl } from '../url';

export default {
    
    mapping : {
        getAll: () =>{
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            axios.get(mappingUrl)
                .then(function(response){
                    return response.data;
                })
        } 
    }   
}