import { createSlice } from '@reduxjs/toolkit'

export const hotel = createSlice({
  name: 'hotel',
  initialState: {},
  reducers: {
    add: (state, action) => {
      state.hotel.append(action.payload)
    },
    remove: (state, action) => {
      state.hotel = state.hotel.filter(item => {
        return item !== action.payload
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = hotel.actions

export default hotel.reducer
