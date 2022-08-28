import { createSlice } from '@reduxjs/toolkit'

export const venue = createSlice({
  name: 'venue',
  initialState: {
    venue: [],
  },
  reducers: {
    add: (state, action) => {
      state.venue = [state.venue, action.payload]
    },
    remove: (state, action) => {
      state.venue = state.venue.filter(item => {
        return item !== action.payload
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = venue.actions

export default venue.reducer
