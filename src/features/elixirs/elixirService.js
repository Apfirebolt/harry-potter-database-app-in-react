import axios from 'axios'

const API_URL = 'https://wizard-world-api.herokuapp.com'

// Get all Elixirs
const getElixirs = async () => {

    const response = await axios.get(API_URL + '/Elixirs')

    return response.data
}

// Get single Elixir
const getSingleElixir = async (ElixirId) => {

    const response = await axios.get(API_URL + ElixirId + '/notes')

    return response.data
}

const ElixirService = {
    getElixirs,
    getSingleElixir,
}

export default ElixirService
