import React from 'react';

const FoodItem = ({foodItem, onDelete}) => {

const handleDeleteClick = (event) => {
    console.log(`You tried to delete ${foodItem.name}`)
    onDelete(foodItem.id);
}

return (
    <div>
        <div className="foodItem-display">
        <div id={foodItem.id}>{foodItem.name}</div>
        <button className="delete" onClick={handleDeleteClick}>
            X
        </button>
    </div>
    </div>


);
};

export default FoodItem;