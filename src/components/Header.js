import Logo from '../images/Asset 16@4x.png';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo"/>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about/">ABOUT</a></li>
                    <li><a href="/menu/">MENU</a></li>
                    <li><a href="/reservation/">RESERVATIONS</a></li>
                    <li><a href="/order/">ORDER ONLINE</a></li>
                    <li><a href="/login/">LOGIN</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;