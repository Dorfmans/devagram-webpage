import Image from 'next/image'

import home from '../../public/images/home.svg'
import publish from '../../public/images/publish.svg'
import profile from '../../public/images/profile.svg'
import homeON from '../../public/images/homeON.svg'
import publishON from '../../public/images/publishON.svg'
import profileON from '../../public/images/profileON.svg'

const Navbar = ({className}) => {
    return (
        <nav className={`navbar ${className}`}>
            <ul>
                <li>
                    <Image
                        src={homeON}
                        alt='Home Icon'
                        width={20}
                        height={20}
                    />
                </li>
                
                <li>
                    <Image
                        src={publish}
                        alt='Home Icon'
                        width={20}
                        height={20}
                    />
                </li>
                
                <li>
                    <Image
                        src={profile}
                        alt='Home Icon'
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar