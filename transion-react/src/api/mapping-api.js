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
        },
        
        saveMapping1: function(mapping){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            return axios.post(mappingUrl, mapping)
                .then(function(response){
                    console.log(response);
                    return response;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }   
}