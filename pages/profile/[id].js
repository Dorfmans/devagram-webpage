import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Feed from "../../components/feed/index"
import ProfileHeader from "../../components/profileHeader/index";
import isLoggedIn from "../../hoc/isLoggedIn.js"
import UserService from "../../services/UserService";


const userService = new UserService();
function Profile({ loggedUser }) {

    const [user, setUser] = useState({});
    const router = useRouter();

    const getProfile = async (idUser) => {
        try {
            const { data } = await userService.getProfile(
                itsMyProfile()
                    ? loggedUser.id
                    : idUser
            );
            return data;
        } catch (error) {
            console.log(error)
            alert(`Cannot get profile`)
        }
    }

    const itsMyProfile = () => {
        return router.query.id === 'mi';
    }

    useEffect(() => async () => {

        if (!router.query.id) {
            return;
        }

        const profileData = await getProfile(router.query.id);

        setUser(profileData);
    }, [router.query.id])


    return (
        <div className="profilePage">
            <ProfileHeader
                loggedUser={loggedUser}
                user={user}
                itsMyProfile={itsMyProfile()}
            />
            <Feed
                userProfile={user}
                loggedUser={loggedUser}
            />
        </div>
    )
}

export default isLoggedIn(Profile);