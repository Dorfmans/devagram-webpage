import UserService from "../services/UserService"
import {useRouter} from "next/router"
import Header from "../components/layout/Header.js"
import Footer from "../components/layout/Footer";



const userService = new UserService();

const isLoggedIn = (Component) => {
    return (props) => {
        const router = useRouter();

        if(typeof window !== 'undefined'){
            if(!userService.loggedIn()){
                router.replace('/')
                return null;
            }            
            return (
            <>
                <Header/>
                <Component {...props} />
                <Footer/>
            </>
            )
        }
        return null;
    }
};

export default isLoggedIn