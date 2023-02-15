import React from 'react';

const FoodItem = ({foodItem, onDelete}) => {

const handleDeleteClick = (event) => {
    console.log(`You tried to delete ${foodItem}`)
    onDelete(foodItem.id);
}


return (
    <div>
        <div className="foodItem-display">
        <div>{foodItem}</div>
        <button className="delete" onClick={handleDeleteClick}>
            X
        </button>
    </div>
    </div>


);
};

export default FoodItem;