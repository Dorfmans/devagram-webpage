import ActionHeader from "../../components/actionHeader/index.js";
import back from "../../public/images/back.svg"

const ProfileHeader = ({
    user
}) => {
    return (
        <ActionHeader 
            title={user.user}
            leftIcon={back}
        />
    )
}

export default ProfileHeader;