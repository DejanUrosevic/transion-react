import axios from 'axios';
import { fieldUrl } from '../url';

export default {
    field : {
        getAll: function(){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            
            return axios.get(fieldUrl + "/fields")
                .then(function(response){
                    return response.data;
                })
                .catch(error => {
                    console.log(error)
                })
        } 
    }   
}