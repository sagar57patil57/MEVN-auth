const url = 'http://localhost:3000/api'
import axios from 'axios'

class PostService {
    
    static getMe() {
        return new Promise(async (resolve, reject) => {
            try{
                let res = await axios.get(url + '/users/me')
                resolve(res.data)
            } catch(err) {
                reject(err)
            }
        })
    }

    static signupUser(data) {
        return axios.post(url + '/users', data)
    }

    static signinUser(data) {
        return axios.post(url + '/auth', data)
    }

}

export default PostService