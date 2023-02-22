import FoodItem from './FoodItem';

//in this component I will need to iterate through the food list and create the food item display
const FoodList= ({foodList, onDelete}) => {
    const renderedFoodList = foodList.map((foodItem) => {
        return <FoodItem key={foodItem.id} foodItem = {foodItem} onDelete={onDelete}/>
    });
    return (<div>{renderedFoodList}</div>);
};

export default FoodList;