import axios from 'axios'

const API_URL = '/api/tickets/'

// Get all Ingredients
const getIngredients = async () => {

    const response = await axios.get(API_URL + '/wizards')

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
