import Logo from '../images/Asset 16@4x.png';
import Nav from './Nav';

const Header = () => {
    return (
        <header id="headerContainer">
            <div id="headerImg" >
                <img src={Logo} alt="Logo" width="200" />
            </div>
            <Nav/>
        </header>
    )
}
export default Header;