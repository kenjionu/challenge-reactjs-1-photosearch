import home from '../../../assets/images/home.svg'
import camera from '../../../assets/images/camera.svg'

import location from '../../../assets/images/location.svg'
import user from '../../../assets/images/user.svg'
import bell from '../../../assets/images/bell.svg'

import './Footer.css'
import { usePage } from '../../../hooks'
export const Footer = () => {
    const { changePage } = usePage();

    return (
        <footer>
            <div className="nav-footer">
                <ul>
                    <li>
                        <a onClick={() => changePage(2)}>
                            <img src={home} alt='home' ></img>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => changePage(4)}>
                            <img src={location} alt='location'></img>
                        </a>
                    </li>
                    <li>
                        <img src={camera} alt='camera'></img>
                    </li>
                    <li>
                        <img src={bell} alt='bell'></img>
                    </li>
                    <li>
                        <a onClick={() => changePage(3)}>
                            <img src={user} alt='user'></img>
                        </a>
                    </li>
  

                </ul>
            </div>


        </footer>
    )
}