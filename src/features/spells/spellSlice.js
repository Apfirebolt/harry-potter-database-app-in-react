import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import spellService from './spellService'

const initialState = {
  spells: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all spells
export const getSpells = createAsyncThunk(
  'spells/getAll',
  async (_, thunkAPI) => {
    try {
      return await spellService.getSpells()
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

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpells.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSpells.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.spells = action.payload
      })
      .addCase(getSpells.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = spellSlice.actions
export default spellSlice.reducer
