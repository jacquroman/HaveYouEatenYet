const FoodItem = ({foodItem, onDelete}) => {

const handleDeleteClick = (event) => {
    console.log(`You tried to delete ${foodItem.name}`)
    onDelete(foodItem.id);
}

return (
    <div>
        <div className="foodItem-display">
        <div id={foodItem.id}>{foodItem.name}</div>
        <img src={foodItem.picture} alt={foodItem.name}/>
        <button className="delete" onClick={handleDeleteClick}>
            X
        </button>
    </div>
    </div>
);
};

export default FoodItem;