import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/characterSlice'
import houseReducer from '../features/houses/houseSlice'

export const store = configureStore({
  reducer: {
    character: characterReducer,
    house: houseReducer
  },
})
