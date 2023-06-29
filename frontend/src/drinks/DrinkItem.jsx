const DrinkItem = ({ drinkObj }) => {
    return (
        <div>
            <h4>{`${drinkObj.id}: ${drinkObj.drink_name}`}</h4>
            <p>Empirically rated <b>{drinkObj.rating}/10</b></p>
        </div>
    )

}

export default DrinkItem;