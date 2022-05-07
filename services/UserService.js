import HttpService from "./HttpService";


export default class UserService extends HttpService {
    async login(datas) {
        const { data } = await this.post('/login', datas);

        localStorage.setItem("user", data.user)
        localStorage.setItem("email", data.email)
        localStorage.setItem("token", data.token)
        
        if(data.avatar){
            localStorage.setItem("avatar", data.avatar)
        }
    }

    async signUp(datas) {
            return this.post('/signup', datas);
    }
}