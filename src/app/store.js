import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/characterSlice'
import houseReducer from '../features/houses/houseSlice'
import elixirReducer from '../features/elixirs/elixirSlice'
import spellReducer from '../features/spells/spellSlice'
import ingredientReducer from '../features/ingredients/ingredientSlice'

export const store = configureStore({
  reducer: {
    character: characterReducer,
    house: houseReducer,
    elixir: elixirReducer,
    spell: spellReducer,
    ingredient: ingredientReducer
  },
})
