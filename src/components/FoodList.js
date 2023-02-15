import React from 'react';
import FoodItem from './FoodItem';


//in this component I will need to iterate through the food list and create the food item display
const FoodList= ({foodList, onDelete}) => {
    //here we want to build out the array 
    const renderedFoodList = foodList.map((foodItem) => {
        return <FoodItem foodItem = {foodItem} onDelete={onDelete}/>

    });

    return (<div>{renderedFoodList}</div>);
};

export default FoodList;