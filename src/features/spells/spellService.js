import axios from 'axios'

const API_URL = '/api/tickets/'

// Get all Spells
const getSpells = async () => {

    const response = await axios.get(API_URL + '/wizards')

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
