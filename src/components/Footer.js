import Logo from '../images/Asset 20@4x.png';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt='Logo'/>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/menu/">Menu</a></li>
                    <li><a href="/reservation/">Reservations</a></li>
                    <li><a href="/order/">Order Online</a></li>
                    <li><a href="/login/">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Concact</h3>
                <ul>
                    <li><a href="/address">Address</a></li>
                    <li><a href="tel:123-456-7890">Phone Number</a></li>
                    <li><a href="mailto:info@littlelemon.com">Email</a></li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/">Linkedin</a></li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;