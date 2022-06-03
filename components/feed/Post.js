import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import CommentOnPost from "./CommentOnPost";

import Avatar from "../avatar";
import like from "../../public/images/like.svg"
import likeON from "../../public/images/likeON.svg"
import comment from "../../public/images/comment.svg"
import commentON from "../../public/images/commentON.svg"

const breakLine = 100;

const Post = ({user, postImage, description, comments, loggedUser}) => {

    const [showCommentSection, setShowCommentSection] = useState(false);
    const [lineLength, setLineLength] = useState(breakLine);

    const showDescription = () => {
        setLineLength(Number.MAX_SAFE_INTEGER)
    }

    const exceedLine = () => {
        return description.length > lineLength;
    }

    const getDescription = () => {
        let message = description.substring(0, lineLength);
        if(exceedLine()){
            return message+='...'
        }
        return message;
    }

    return (
        <div className="post">
            <Link href={`/profile/${user.id}`}>
                <section className="postHeader">
                    <Avatar src={user.avatar}/>
                    <strong>{user.user}</strong>
                </section>
            </Link>

            <div className="postImage">
                <img src={postImage} alt={description}/>
            </div>

            <div className="postFooter">
                <div className="postFooterActions">
                    <Image 
                    src={comment}
                    alt='Comment icon'
                    width={20}
                    height={20}
                    onClick={() => setShowCommentSection(!showCommentSection)}
                    />

                    <Image 
                    src={like}
                    alt='Like icon'
                    width={20}
                    height={20}
                    onClick={()=>console.log('liked')}
                    />

                    <span className="likesCounter">
                        Liked by <strong>5 pessoas</strong>
                    </span>
                </div>

                <div className="postDescription">
                    <strong className="userName">{user.user}
                    </strong>
                    <p className="description">
                        {getDescription()}
                        {exceedLine() && (
                            <span 
                                className="showDescription"
                                onClick={showDescription}>
                                more
                            </span>
                        )}
                    </p>
                </div>

                <div className="postComments">
                    {comments.map((comment, i) => (
                    <div className="comment" key={i}>
                        <strong className="userName">{comment.user}</strong>
                        <p className="description">{comment.message}</p>
                    </div>))}
                </div>
            </div>
            {showCommentSection && 
                <CommentOnPost loggedUser={loggedUser}/>
            }
        </div>
    )
}

export default Post