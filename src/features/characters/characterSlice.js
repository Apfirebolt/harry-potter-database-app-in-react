import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import characterService from './characterService'

const initialState = {
  characters: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all characters
export const getCharacters = createAsyncThunk(
  'notes/getAll',
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await characterService.getNotes(ticketId, token)
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

// Get single character
export const getSingleCharacter = createAsyncThunk(
    'notes/getAll',
    async (ticketId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await characterService.getNotes(ticketId, token)
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

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.notes = action.payload
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = characterSlice.actions
export default characterSlice.reducer
