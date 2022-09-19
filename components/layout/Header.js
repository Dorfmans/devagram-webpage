import Image from 'next/image'
import { useState } from 'react'

import hireMiHeader from '../../public/images/hireMiHeader.svg'
import search from '../../public/images/search.svg'
import Navbar from './Navbar'
import SearchResult from './SearchResult'
import UserService from '../../services/UserService'
import {useRouter} from 'next/router'

const userService = new UserService();

const Header = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter()

    let headerClassName = "";
    if (window && window.location.pathname !== '/') {
        headerClassName = 'desktop'
    }

    const onSearch = async (e) => {
        setSearchValue(e.target.value);
        setSearchResult([]);

        if (e.target.value.length < 3) {
            return;
        }
        try {
            const {data} = await userService.search(searchValue);
            setSearchResult(data);

        }catch(error) {
            alert('Couldnt search this user' + error?.response?.data?.error)
        }
    }

    const onClickSearchResult = (id) => {
        setSearchResult([]);
        setSearchValue('');
        router.push(`/profile/${id}`)
    };
    
    const homeRefresh = () => {
        router.push('/')
    }

    return (
        <header className={`mainHeader ${headerClassName}`}>
            <div className='mainHeaderContent'>
                <div className='mainHeaderLogo'>
                    <Image
                        onClick={() => homeRefresh()}
                        src={hireMiHeader}
                        alt='Hire Mi Logo'
                        layout='fill'
                    />
                </div>

                <div className='searchBar'>
                    <div className='searchBarIcon'>
                        <Image
                            src={search}
                            alt='Magnifier Icon'
                            layout='fill'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchValue}
                        onChange={onSearch}
                    />
                </div>

                <Navbar className='desktop'/>
            </div>

            {searchResult.length> 0 && (
                <div className='searchResultContainer'>
                    {searchResult.map(r => (
                        <SearchResult 
                            avatar={r.avatar}
                            name={r.name}
                            email={r.email}
                            key={r._id}
                            id={r._id}
                            onClick={onClickSearchResult}/>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header