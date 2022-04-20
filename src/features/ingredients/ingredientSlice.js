import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ingredientService from './ingredientService'

const initialState = {
  ingredients: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all ingredients
export const getIngredients = createAsyncThunk(
  'ingredients/getAll',
  async (_, thunkAPI) => {
    try {
      return await ingredientService.getIngredients()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ingredients = action.payload
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default ingredientSlice.reducer
