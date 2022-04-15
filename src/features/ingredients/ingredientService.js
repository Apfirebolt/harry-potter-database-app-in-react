import axios from 'axios'

const API_URL = 'https://wizard-world-api.herokuapp.com'

// Get all Ingredients
const getIngredients = async () => {

    const response = await axios.get(API_URL + '/Ingredients')

    return response.data
}

// Get single Ingredient
const getSingleIngredient = async (IngredientId) => {

    const response = await axios.get(API_URL + IngredientId + '/notes')

    return response.data
}

const IngredientService = {
    getIngredients,
    getSingleIngredient,
}

export default IngredientService
