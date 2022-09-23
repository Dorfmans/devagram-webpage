import { useEffect, useState } from 'react'
import FeedService from '../../services/FeedService';
import Post from './Post.js';

const feedService = new FeedService();

const Feed = ({ loggedUser, userProfile }) => {
    const [postsList, setPostsList] = useState([]);

    const getPosts = async () => {
        const { data } = await feedService.loadPosts(userProfile?._id);
        const loadedPosts = data.map((post) =>
        ({
            id: post._id,
            user: {
                userId: post.idUser,
                user: post?.user?.name || userProfile?.name,
                avatar: post?.user?.avatar || userProfile?.avatar
            },
            postImage: post.image,
            description: post.description,
            likes: post.likes,
            comments: post.comments.map(c => ({
                user: c.name,
                message: c.comment
            }))
        })
        )

        setPostsList(loadedPosts)
    }

    useEffect(() => {
        setPostsList([])
        getPosts();
    }, []);

    if (!postsList.length) {
        return null;
    }

    return (
        <div className='feedContainer desktopDeviceWidth'>
            {postsList.map(postData => (
                <Post key={postData.id} {...postData}
                    loggedUser={loggedUser} />
            ))}
        </div>
    )
}

export default Feed;