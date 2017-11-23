import axios from 'axios';
import { clientUrl } from '../url';

export default {
    client : {
        getAll: function(){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            
            return axios.get(clientUrl)
                .then(function(response){
                    return response.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },
        
        getByLetters: function(letter){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            
            return axios.get(clientUrl + '/letter', {params:{letter:letter}})
                .then(function(response){
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }   
}