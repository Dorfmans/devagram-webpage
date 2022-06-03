import { useEffect, useState } from 'react'
import Post from './Post';

const Feed = ({loggedUser}) => {
    const [postsList, setPostList] = useState([]);

    useEffect(() => {
        setPostList([
            {
                id: '1',
                user: {
                    id: '1',
                    user: 'Raphael Dorfman',
                    avatar: null},
                postImage: 'https://resultadosdigitais.com.br/files/2015/08/por-do-sol-e1440783856626.jpg',
                description: 'aisuehaiseuhaiesauhseiausehaiehaiesuhaieuahiseuhaiseuhaiseuasieahusieauhiaseuhaisehaiseusahieuahsieausheisauehaieuashieauheiauehiauehiesauhseiauhseiauhseiausheaiseuhaiehaieuaseoasiejaoseijaoeijh',
                likes: [''],
                comments: [{
                    user: 'Fernando',
                    message: 'uau'}]
            },
        ])
    }, [loggedUser]);
    
    return (
        <div className='feedContainer desktopDeviceWidth'>
            {postsList.map(postData => (
                <Post key={postData.id} {...postData}
                loggedUser={loggedUser}/>
            ))}
        </div>
    )
}

export default Feed