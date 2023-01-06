const Customer = (props) => {
    return (
        <article>
            <div id="customerImg">
                <img src={props.img} alt="Customer" width="175"/>
            </div>
            <div id="customerText">
                <p>{props.name}</p>
                <p>{props.comment}</p>
            </div>
        </article>
    )
}
export default Customer;