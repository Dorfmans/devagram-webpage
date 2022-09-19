import ActionHeader from "../../components/actionHeader/index.js";
import Avatar from "../avatar";
import Button from "../buttons"

import back from "../../public/images/back.svg"


const ProfileHeader = ({
    user
}) => {
    return (
        <div className="profileHeader desktopDeviceWidth">

            <ActionHeader 
                title={user.name}
                leftIcon={back}
            />

            <hr className="headerBorder"/>

            <div className="profileStatus">
                <Avatar src={user.avatar} />

                <div className="profileInfo">
                    <div className="statusContainer">
                        <div className="status">
                            <strong>{user.posts}</strong>
                            <span>Posts</span>
                        </div>
                        <div className="status">
                            <strong>{user.followers}</strong>
                            <span>Followers</span>
                        </div>
                        <div className="status">
                            <strong>{user.following}</strong>
                            <span>Following</span>
                        </div>
                    </div>

                    <Button 
                        text={'Follow'}
                        color='primary'/>

                </div>
            </div>
        </div>

    )
}

export default ProfileHeader;