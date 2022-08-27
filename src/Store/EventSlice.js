import { createSlice } from '@reduxjs/toolkit'

export const event = createSlice({
  name: 'event',
  initialState: {
    value: ['1'],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action) => {
      state.hotel = state.hotel.filter(item => {
        return item !== action.payload
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = event.actions

export default event.reducer
