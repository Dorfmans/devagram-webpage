import Image from 'next/image'

import hireMiHeader from '../../public/images/hireMiHeader.svg'
import search from '../../public/images/search.svg'
import Navbar from './Navbar'


const Header = () => {
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
                        value={''}
                        onChange={()=> console.log('Searching...')}
                    />

                </div>

                <Navbar className='desktop'/>

            </div>

        </header>
    )
}

export default Header