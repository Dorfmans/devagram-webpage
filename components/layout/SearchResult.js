import Avatar from "../avatar"

const SearchResult = ({avatar, name, email, onClick, id}) => {
    return (
        <div className='searchResult' onClick={() => onClick(id)}>

            <Avatar src={avatar}/>

            <div className='resultUserInfo'>

                <strong>{name}</strong>
                <span>{email}</span>

            </div>

        </div>
    )
}

export default SearchResult;