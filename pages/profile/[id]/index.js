import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import Feed from "../../../components/feed/index.js"
import ProfileHeader from "../../../components/profileHeader/index.js";
import isLoggedIn from "../../../hoc/isLoggedIn.js"




const Profile = ( {loggedUser} ) => {

    const [user, setUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        setUser({
            name: 'Raphael Dorfman'
        });
    }, [router.query.id])


    return (
        <div className="profilePage">
            <ProfileHeader 
                loggedUser={loggedUser}
                user={user}
            />
            <Feed loggedUser={loggedUser} />
        </div>
    )
}

export default isLoggedIn(Profile);