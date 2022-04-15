import axios from 'axios'

const API_URL = 'https://wizard-world-api.herokuapp.com'

// Get all Spells
const getSpells = async () => {

    const response = await axios.get(API_URL + '/Spells')

    return response.data
}

// Get single Spell
const getSingleSpell = async (SpellId) => {

    const response = await axios.get(API_URL + SpellId + '/notes')

    return response.data
}

const SpellService = {
    getSpells,
    getSingleSpell,
}

export default SpellService
