import axios from 'axios';

export default {
    user: {
        login: (user) => 
            axios.post('http://localhost:8080/login', { "username": user.username, "password":user.password }).
            then(
                res => res.data
            )
    }
}