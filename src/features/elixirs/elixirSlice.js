import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import elixirService from './elixirService'

const initialState = {
  elixirs: [],
  elixir: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all elixirs
export const getElixirs = createAsyncThunk(
  'elixirs/getAll',
  async (_, thunkAPI) => {
    try {
      return await elixirService.getElixirs()
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

// Get single elixir
export const getSingleElixir = createAsyncThunk(
    'elixirs/singleelixir',
    async (elixirId, thunkAPI) => {
      try {
        return await elixirService.getSingleelixir(elixirId)
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

export const elixirSlice = createSlice({
  name: 'elixir',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getElixirs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getElixirs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.elixirs = action.payload
      })
      .addCase(getElixirs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = elixirSlice.actions
export default elixirSlice.reducer
