import {Link} from 'react-router-dom';
import SpecialItem from "./SpecialItem";
import Special1 from "../images/greek salad.jpg";
import Special2 from "../images/bruchetta.jpg";
import Special3 from "../images/lemon dessert.jpg";

const data = [
    {
        img: Special1,
        item: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        img: Special2,
        item: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
        img: Special3,
        item: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    }
]

const Specials = () => {
    return (
        <div id="specialsContainer">
            <div id="specialsHeader">
                <h1>This weeks specials!</h1>
                <div>
                    <Link to="/menu/">
                        <button>Online Menu</button>
                    </Link>
                </div>
            </div>
            <div id="specials">
                <SpecialItem
                img={data[0].img}
                item={data[0].item}
                price={data[0].price}
                description={data[0].description}
                />
                <SpecialItem
                img={data[1].img}
                item={data[1].item}
                price={data[1].price}
                description={data[1].description}
                />
                <SpecialItem
                img={data[2].img}
                item={data[2].item}
                price={data[2].price}
                description={data[2].description}
                />
            </div>
        </div>
    )
}
export default Specials;