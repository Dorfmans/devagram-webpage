import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import home from '../../public/images/home.svg'
import publish from '../../public/images/publish.svg'
import profile from '../../public/images/profile.svg'
import homeON from '../../public/images/homeON.svg'
import publishON from '../../public/images/publishON.svg'
import profileON from '../../public/images/profileON.svg'


const toggleFooter = {
    home: {
        on: homeON,
        off: home,
        routes: ['/']
    },
    post: {
        on: publishON,
        off: publish,
        routes: ['/post']
    },
    profile: {
        on: profileON,
        off: profile,
        routes: ['/profile/mi', '/profile/mi/update']
    }
}

const Navbar = ({className}) => {
    const [activeFooter, setActiveFooter] = useState('home');
    const router = useRouter();

    useEffect(() =>{
        activePath()
    },[router.asPath])

    const activePath = () => {
        const toggleFooterKeys = Object.keys(toggleFooter);
        const activeKey = toggleFooterKeys.findIndex(key => {
            return toggleFooter[key].routes.includes(
                window.location.pathname
            )
        })
        if (activeKey === -1) {
            setActiveFooter('home');
        }
            setActiveFooter(toggleFooterKeys[activeKey]);
    }

    const getImage = (path) => {
        const activeRoute = toggleFooter[path];

        if(activeFooter === path) {
            return activeRoute.on
        }
        return activeRoute.off
    }

    const onClickIcon = (pathName) => {
        setActiveFooter(pathName);
        router.push(toggleFooter[pathName].routes[0])
    }

    return (
        <nav className={`navbar ${className}`}>
            <ul>
                <li onClick={() => onClickIcon('home')}>
                    <Image
                        src={getImage('home')}
                        alt='Home Icon'
                        width={20}
                        height={20}
                    />
                </li>
                
                <li onClick={() => onClickIcon('post')}>
                    <Image
                        src={getImage('post')}
                        alt='Publish Icon'
                        width={20}
                        height={20}
                    />
                </li>
                
                <li onClick={() => onClickIcon('profile')}>
                    <Image
                        src={getImage('profile')}
                        alt='Profile Icon'
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar