import isLoggedIn from "../../../hoc/isLoggedIn.js"

const Feed = () => {
    return (
        <h1>User Feed</h1>
    )
}

export default isLoggedIn(Feed);