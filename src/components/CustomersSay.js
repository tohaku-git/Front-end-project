import Customer from "./Customer";
import Customer1 from '../images/Customer1.jpg';
import Customer2 from '../images/Customer2.jpg';
import Customer3 from '../images/Customer3.jpg';
import Customer4 from '../images/Customer4.jpg';

const data = [
    {
        img: Customer1,
        name: "Mike",
        comment: "It was amazing!!",
    },
    {
        img: Customer2,
        name: "Natasha",
        comment: "Everyone had a wonderful time.",
    },
    {
        img: Customer3,
        name: "Sai",
        comment: "It was FABULOUS!",
    },
    {
        img: Customer4,
        name: "Yining",
        comment: "The food was extraordinary.",
    }
]

const CustomersSay = () => {
    return (
        <div id="customersContainer">
            <h2>Testimonials</h2>
            <div id="customers">
                <Customer
                img={data[0].img}
                name={data[0].name}
                comment={data[0].comment}
                />
                <Customer
                img={data[1].img}
                name={data[1].name}
                comment={data[1].comment}
                />
                <Customer
                img={data[2].img}
                name={data[2].name}
                comment={data[2].comment}
                />
                <Customer
                img={data[3].img}
                name={data[3].name}
                comment={data[3].comment}
                />
            </div>
        </div>
    )
}
export default CustomersSay;