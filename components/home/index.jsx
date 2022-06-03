import isLoggedIn from "../../hoc/isLoggedIn"
import Feed from "../feed"

const Home = ({loggedUser}) => {
    return (
        <Feed loggedUser={loggedUser}/>
    );
}

export default isLoggedIn(Home);