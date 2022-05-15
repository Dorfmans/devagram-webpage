import avatar from '../../public/images/avatar.svg'

const Avatar = ({src}) => {
    
    const getAvatar = () => {
        
        if (src && src !== 'undefined'){
            return src;
        }
        return avatar.src;
    };

    return (
        <img 
            src={getAvatar()}
            alt='Avatar'
            className='avatar'
        />
    );
};

export default Avatar;