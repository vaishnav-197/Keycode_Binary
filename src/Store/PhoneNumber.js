import { createSlice } from '@reduxjs/toolkit'

export const number = createSlice({
  name: 'number',
  initialState: {
    hotel: [],
  },
  reducers: {
    add: (state, action) => {
      state.hotel = [...state.hotel, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = number.actions

export default number.reducer
