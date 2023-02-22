import {useState} from 'react';

const FoodSearchBar = ({onAdd}) => {

const [foodName, setFoodName] =  useState("");

//!!! must do the handle change and set a useState value of the input field in order to have a controlled component! This is required for all form element input fields
const handleChange = (event) =>{
    setFoodName(event.target.value);
}



//with forms you will always need two functions, a handleChange and a handle Submit
const handleSubmit = (event) => {
    //on form submits you also need to always prevent default else the page will refresh and you will lose your data as well as the app re-rendering
    event.preventDefault();

    //when we submit the form we want to pass the foodName back up to the parent APP component so that we can use the foodName to make an API query search
    onAdd(foodName);

    //after it has been passed up we can clear out the value of the input element by setting it to an empty string
    setFoodName('');
}



return (<div>
    <form onSubmit = {handleSubmit}>
        <label>Add A Food Item to your To Eat List</label>
        <input value = {foodName} onChange = {handleChange}/>
        <button>Add Food</button>
    </form>
</div>);
};

export default FoodSearchBar;