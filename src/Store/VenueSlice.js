import { createSlice } from '@reduxjs/toolkit'

export const venue = createSlice({
  name: 'venue',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.venue = state.venue.append(action.payload)
    },
    remove: (state, action) => {
      state.value = state.value.filter(item => {
        return item._id !== action.payload._id
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = venue.actions

export default venue.reducer
