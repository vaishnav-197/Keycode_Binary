import { createSlice } from '@reduxjs/toolkit'

export const hotel = createSlice({
  name: 'hotel',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action) => {
      state.value = state.value.filter(item => {
        return item.id !== action.payload.id
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = hotel.actions

export default hotel.reducer
