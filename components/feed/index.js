import { useEffect, useState } from 'react'
import FeedService from '../../services/FeedService';
import Post from './Post';

const feedService = new FeedService();

const Feed = ({loggedUser}) => {

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
            const getFeed = async() => {

            const { data } = await feedService.loadPosts();
            
            const loadedPosts = data.map((post) => (
            {
                id: post._id,
                userId: post.idUser,
                user: {
                    user: post.user.user,
                    avatar: post.user.avatar
                },
                postImage: post.image,
                description: post.description,
                likes: post.likes,
                comments: post.comments.map(c => ({
                    user: c.name,
                    message: c.comment
                }))
            }
            ))
            setPostsList(loadedPosts);
        }
    getFeed()}, [loggedUser]);


    return (
        <div className='feedContainer desktopDeviceWidth'>
            {postsList.map(postData => (
                <Post key={postData.id} {...postData}
                loggedUser={loggedUser}/>
            ))}
        </div>
    )
}

export default Feed;