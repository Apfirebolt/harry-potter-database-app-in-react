import axios from 'axios'

const API_URL = 'https://wizard-world-api.herokuapp.com'

// Get all Houses
const getHouses = async () => {

    const response = await axios.get(API_URL + '/Houses')

    return response.data
}

// Get single House
const getSingleHouse = async (HouseId) => {

    const response = await axios.get(API_URL + '/Houses' + HouseId)

    return response.data
}

const HouseService = {
    getHouses,
    getSingleHouse,
}

export default HouseService
