import brandImage1 from '../images/Mario and Adrian A.jpg';
import brandImage2 from '../images/Mario and Adrian B.jpg';

const Chicago = () => {
    return (
        <div id="chicagoContainer">
            <div id="chicagoText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div id="chicagoImg">
                <img src={brandImage1} alt="Brand" width="250" />
                <img src={brandImage2} alt="Brand" width="250" />
            </div>
        </div>
    )
}
export default Chicago;