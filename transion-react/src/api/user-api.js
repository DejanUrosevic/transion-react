import axios from 'axios';

export default {
    user: {
        login: (user) => 
            axios.post('http://localhost:8080/login', { "username": user.username, "password":user.password })
            .then(function(response){
                localStorage.setItem("token", response.headers.authorization);
                return response.data;
            })
    }
}