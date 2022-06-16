import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import CommentOnPost from "./CommentOnPost";
import FeedService from "../../services/FeedService";

import Avatar from "../avatar";
import like from "../../public/images/like.svg"
import likeON from "../../public/images/likeON.svg"
import comment from "../../public/images/comment.svg"
import commentON from "../../public/images/commentON.svg"

const breakLine = 100;

const feedService = new FeedService();

const Post = ({id, user, postImage, description, likes, comments, loggedUser}) => {

    const [postLiked, setPostLiked] = useState(likes)
    const [postComment, setPostComment] = useState(comments)
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

    const getCommentImage = () => {
        return showCommentSection
            ? commentON
            : comment;
    }

    const inComment = async (comment) => {
        try{
            await feedService.addComment(id, comment);
            setShowCommentSection(false);
            setPostComment([...postComment,
                        {
                            user: loggedUser.user,
                            message: comment
                        }
            ])
        }catch(e) {
            alert('Could not send your comment' + (e?.response?.data?.error || ""));
        }
    }

    const userHasLiked = () => {
        return postLiked.includes(loggedUser.id);
    }

    const likeCount = async () => {
        try {   
            await feedService.addLikes(id);
            if (userHasLiked()) {
                setPostLiked(
                    postLiked.filter(userHasLiked => userHasLiked !== loggedUser.id)
                )
            } else {
                setPostLiked([...postLiked, loggedUser.id])
            }
        }catch(e){
            alert('Could not count your like' + (e?.response?.data?.error || ""));
        }
    }

    const getLikeImage = () => {
        return userHasLiked()
            ? likeON
            : like
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
                    src={getCommentImage()}
                    alt='Comment icon'
                    width={20}
                    height={20}
                    onClick={() => setShowCommentSection(!showCommentSection)}
                    />

                    <Image 
                    src={getLikeImage()}
                    alt='Like icon'
                    width={20}
                    height={20}
                    onClick={likeCount}
                    />

                    <span className="likesCounter">
                        Liked by <strong>{postLiked.length}</strong> users.
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
                    {postComment.map((comment, i) => (
                    <div className="comment" key={i}>
                        <strong className="userName">{comment.user}</strong>
                        <p className="description">{comment.message}</p>
                    </div>))}
                </div>
            </div>
            {showCommentSection && 
                <CommentOnPost inComment={inComment} loggedUser={loggedUser}/>
            }
        </div>
    )
}

export default Post