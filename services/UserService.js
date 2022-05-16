import HttpService from "./HttpService";


export default class UserService extends HttpService {
    async login(datas) {
        const { data } = await this.post('/login', datas);

        localStorage.setItem("user", data.user)
        localStorage.setItem("email", data.email)
        localStorage.setItem("token", data.token)
        
        const user = await this.get('/user')
        localStorage.setItem('id', user.data._id)


        if(user.data.avatar){
            localStorage.setItem("avatar", user.data.avatar)
        }
    }

    async signUp(datas) {
            return this.post('/signup', datas);
    }

    loggedIn() {
        return localStorage.getItem('token') !== null;
    }

    async search(searchValue) {
        return this.get('/search?search=' + searchValue)
    }
}