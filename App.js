import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import FoodSearchBar from './components/FoodSearchBar';
import FoodList from './components/FoodList';
import CountryList from './components/CountryList';
import {FOOD_LIST} from './mock-data';
import getFoodImage from './api';
import getRecipe from './api';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  //TO DO: the generate mockData needs to put the data into the food list
  const generateMockData = (data) => {
    data.map(foodItem => {
      console.log('generateMockData foodItem in the map function', foodItem);
      return addFoodItem(foodItem);
    });
  };

  // getFoodImage();

  // getRecipe("pizza");

  //attempted API call to test
  // console.log(getFoodImage());

  //use the useEffect to gather your mock data upon component mount!
  //QUESTION: why does it want the dependency in the use effect?
  useEffect(()=>{
    generateMockData(FOOD_LIST);
  }, []);


  const addFoodItem = (foodItem) => {
    const updatedFoodList = [foodItem, ...foodList];
    setFoodList(updatedFoodList);
  }
  

  const removeFoodItem = (foodItemId) => {
    const updatedFoodList = foodList.filter(foodItem => {
      return foodItem.id !== foodItemId;
    })
    return  setFoodList(updatedFoodList);
  }

  //TASK TO DO: How do i make a left column and header layout in React? Do I need to use Grid?
  return (
    <div className="App" data-testid="app">
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
