import axios from 'axios';

//how to make axios calls https://circleci.com/blog/making-http-requests-with-axios/

// currently getting an error calling this API;
// API call to get a random food
//https://github.com/surhud004/Foodish#demo
export const getFoodImage = async () => {
    const response = await axios.get('https://foodish-api.herokuapp.com/').then(data => console.log('getFoodImage data', data)).catch(error => console.error(error));
    return response.data;
};

//API call to get recipe for search term
//https://developer.edamam.com/edamam-docs-recipe-api
export const getRecipe = async (foodName) =>{
    const response = await axios.get('https://api.edamam.com/api/recipes/v2',
    {params: {
        query: foodName
    }}).then(data => console.log('getRecipe data', data)).catch(error=> console.error(error));
    return response.data;
}