const SnackItem = ({ snackObj }) => {
    return (
        <div>
            <h4>{`${snackObj.id}: ${snackObj.snack_name}`}</h4>
            <p>Empirically rated <b>{snackObj.rating}/10</b></p>
        </div>
    )

}

export default SnackItem;