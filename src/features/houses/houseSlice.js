import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import houseService from './houseService'

const initialState = {
  houses: [],
  house: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all houses
export const getHouses = createAsyncThunk(
  'houses/getAll',
  async (_, thunkAPI) => {
    try {
      return await houseService.getHouses()
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

// Get single house
export const getSingleHouse = createAsyncThunk(
    'houses/singleHouse',
    async (houseId, thunkAPI) => {
      try {
        return await houseService.getSingleHouse(houseId)
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

export const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.houses = action.payload
      })
      .addCase(getHouses.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = houseSlice.actions
export default houseSlice.reducer
