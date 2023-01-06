const SpecialItem = (props) => {
    return (
        <article>
            <div>
                <img src={props.img} alt="Special Food" width="250" height="150"/>
            </div>
            <div id="specialItemText">
                <div>
                    <h4>{props.item}</h4>
                    <div>{props.price}</div>
                </div>
                <p>{props.description} </p>
                <p>Order a delivery</p>
            </div>
        </article>
    )
}
export default SpecialItem;