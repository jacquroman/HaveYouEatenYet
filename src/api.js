import react from 'react';
import axios from 'axios';


//remember to do error handling

//currently getting an error calling this API;
//API call to get a random food 
const getFoodImage = async () => {
    const response = await axios.get('https://foodish-api.herokuapp.com/').then(data => console.log(data)).catch(error => console.error(error));
    return response.data;
};

export default getFoodImage;


// const getRecipe = async axios.get('https://api.edamam.com/api/recipes/v2');