import axios from 'axios'

const API_URL = '/api/tickets/'

// Get all characters
const getCharacters = async () => {

    const response = await axios.get(API_URL + '/wizards')

    return response.data
}

// Get single character
const getSingleCharacter = async (characterId) => {

    const response = await axios.get(API_URL + characterId + '/notes')

    return response.data
}

const characterService = {
    getCharacters,
    getSingleCharacter,
}

export default characterService
