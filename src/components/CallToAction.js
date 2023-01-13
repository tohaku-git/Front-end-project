import {Link} from 'react-router-dom';
import foodImage from '../images/restaurant food.jpg';

const CallToAction = () => {
    return (
        <div id="callToActionContainer">
            <div id="callToActionText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <Link to="/booking/">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
            </div>
            <div id="callToActionImg">
                <img src={foodImage} alt="Food"  />
            </div>
        </div>
    )
}
export default CallToAction;