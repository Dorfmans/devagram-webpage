import isLoggedIn from "../../../hoc/isLoggedIn.js"

const Profile = () => {
    return (
        <h1>User Feed</h1>
    )
}

export default isLoggedIn(Profile);