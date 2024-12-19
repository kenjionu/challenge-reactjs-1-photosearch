import home from '../../../assets/images/home.svg'
import camera from '../../../assets/images/camera.svg'

import location from '../../../assets/images/location.svg'
import user from '../../../assets/images/user.svg'
import bell from '../../../assets/images/bell.svg'

import './Footer.css'
export const Footer = () => {
    return (
        <footer>
            <div className="nav-footer">
                <ul>
                    <li>
                        <img src={home} alt='home'></img>
                    </li>
                    <li>
                        <img src={location} alt='location'></img>
                    </li>
                    <li>
                        <img src={camera} alt='camera'></img>
                    </li>
                    <li>
                        <img src={bell} alt='bell'></img>
                    </li>
                    <li>
                        <img src={user} alt='user'></img>
                    </li>

                </ul>
            </div>


        </footer>
    )
}