import Avatar from "../avatar"

const CommentOnPost = ({ loggedUser }) => {
    return (
        <div className="commentOnPostContainer">
            <Avatar src={loggedUser.avatar} />
            <textarea
                rows={1}
                placeholder="Comment on this post...">
            </textarea>
        </div>
    )
}

export default CommentOnPost;