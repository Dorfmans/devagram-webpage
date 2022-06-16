import { useState } from "react";
import Avatar from "../avatar"

const CommentOnPost = ({ loggedUser, inComment }) => {

    const [rows, setRows] = useState(1);
    const [comment, setComment] = useState('');

    const onComment = (e) => {
        const inputValue = e.target.value;
        setComment(inputValue);
        setRows(inputValue.length > 0 ? 2 : 1)
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleComment();
        }
    }

    const handleComment = () => {
        if (comment.trim().length === 0 || !inComment) {
            return;
        }
        
        inComment(comment);
    }

    return (
        <div className="commentOnPostContainer">
            <Avatar src={loggedUser.avatar} />
            <textarea
                rows={rows}
                onKeyDown={onKeyDown}
                onChange={onComment}
                autoFocus={true}
                value={comment}
                placeholder="Comment on this post...">
                
            </textarea>

            <button
                className="commentOnPostBtn desktop"
                type="button"
                onClick={handleComment}
            >
                Post
            </button>
        </div>
    )
}

export default CommentOnPost;