import isLoggedIn from "../../hoc/isLoggedIn"

const Home = () => {
    return (
        <h1>Home</h1>
    );
}

export default isLoggedIn(Home);