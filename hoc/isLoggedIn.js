import UserService from "../services/UserService"
import {useRouter} from "next/router"



const userService = new UserService();

const isLoggedIn = (Component) => {
    return (props) => {
        const router = useRouter();

        if(typeof window !== 'undefined'){
            if(!userService.loggedIn()){
                router.replace('/')
                return null;
            }            
            return <Component {...props} />
        }
        return null;
    }
};

export default isLoggedIn