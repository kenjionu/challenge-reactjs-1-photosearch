import './Header.css'
import logo from '../../../assets/images/logo.svg'
import menu from '../../../assets/images/menu.svg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo}></img><h1>PhotoSearch</h1>
            <div className="nav">
                <img src={menu}></img>
            </div>
        </div>
    );
};

export default Header