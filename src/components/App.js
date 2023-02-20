import '../styles/App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Header from './Header';
import FoodSearchBar from './FoodSearchBar';
import FoodList from './FoodList';
import CountryList from './CountryList';
import {FOOD_LIST} from '../mock-data';
import getFoodImage from '../api';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  //TO DO: the generate mockData needs to put the data into the food list
  const generateMockData = (data) => {
    console.log('data', data);
    data.map(foodItem => {
      console.log(foodItem.foodName)
      return addFoodItem(foodItem);
    });
  }

  //attempted API call to test
  // console.log(getFoodImage());

  //use the useEffect to gather your mock data upon component mount!
  useEffect(()=>{
    generateMockData(FOOD_LIST);
  }, []);

  const addFoodItem = (foodName) => {

    //temporary generate a random id
    // let id = Math.random()*999 + 1;

    // let foodItem = {
    //   id,
    //   foodName
    // }

    // once we have the foodName we will want to make an API call to get the data on the food item to add to our list

    //since we are updating the foodList array, we need to actually use a spread operator in order to set the state correctly

    //first make a new array using the spread operator

    //DOUBLE CHECK THAT THE FOOD NAME IS COMING FROM AN API CALL RESPONSE
    const updatedFoodList = [foodName, ...foodList];
    setFoodList(updatedFoodList);
  }

  // generateMockData(FOOD_LIST);

  const removeFoodItem = () => {
    //remove food Item should be called on the ID
  }

  //TASK TO DO: How do i make a left column and header layout in React? Do I need to use Grid?
  return (
    <div className="App">
      <Header/>
      <div className="left-panel">
        <CountryList countryList = {countryList}/>
      </div>
      <div className = "right-panel">
        <FoodSearchBar onAdd ={addFoodItem}/>
        <FoodList foodList={foodList} onDelete={removeFoodItem}/>
      </div>
    </div>
  );
}

export default App;
