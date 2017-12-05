import axios from 'axios';
import { importUrl } from '../url';

export default {
    import : {
        getAll: function(){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            
            return axios.get(importUrl)
                .then(function(response){
                    return response.data;
                })
                .catch(error => {
                    console.log(error)
                })
        },

        saveImport: function(data){
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            var formData = new FormData();
            formData.append('file', data.file);
            return axios.post(importUrl, formData,{params:{mapping:data.mapping}}, config)
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