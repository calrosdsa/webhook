import axios from 'axios'

export default{
    async login(email:string,password:string){
        await axios.post('/api/account/login', {email,password});
    },
    async loadUser(){
        var res = await axios.get('/api/account/user')
        return res
    }
}

