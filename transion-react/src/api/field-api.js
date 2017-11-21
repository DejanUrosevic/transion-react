import axios from 'axios';
import { fieldUrl } from '../url';

export default {
    field : {
        getAll: function(mappingtype){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            
            return axios.get(fieldUrl + "/fields/"+mappingtype.type)
                .then(function(response){
                    return response.data;
                })
                .catch(error => {
                    console.log(error)
                })
        } 
    }   
}