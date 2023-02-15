import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import FoodSearchBar from './components/FoodSearchBar';
import FoodList from './components/FoodList';
import CountryList from './components/CountryList';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [countryList, setCountryList] = useState([]);


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


  const removeFoodItem = () => {
    //remove food Item should be called on the ID
  }

  //TASK TO DO: How do i make a left column and header layout in React? Do I need to use Grid?
  return (
    <div className="App">
      <Header/>
      <CountryList countryList = {countryList}/>
      <FoodSearchBar onAdd ={addFoodItem}/>
      <FoodList foodList = {foodList} onDelete={removeFoodItem}/>
    </div>
  );
}

export default App;
