import Image from 'next/image'
import { useState } from 'react'

import hireMiHeader from '../../public/images/hireMiHeader.svg'
import search from '../../public/images/search.svg'
import Navbar from './Navbar'
import SearchResult from './SearchResult'


const Header = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    const onSearch = (e) => {
        setSearchValue(e.target.value);
        setSearchResult([]);

        if (searchValue.length < 3) {
            return;
        }

        setSearchResult([
            {avatar: '',
            name: 'Rapha',
            email: 'rapha@dorf',
            _id: '123456'
            },
            {avatar: '',
            name: 'Rapha',
            email: 'rapha@dorf',
            _id: '123456'
            }
        ]);
    }

    const onClickSearchResult = (id) => {{id}};
    
    return (
        <header className='mainHeader'>
            <div className='mainHeaderContent'>
                <div className='mainHeaderLogo'>
                    <Image
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