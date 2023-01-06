import Logo from '../images/Asset 18@4x.png';

const Footer = () => {
    return (
        <footer id="footerContainer">
            <div>
                <div>
                    <img src={Logo} alt='Logo' width="150"/>
                </div>
                <div>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3>Concact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;