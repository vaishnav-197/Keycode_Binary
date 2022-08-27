import { createSlice } from '@reduxjs/toolkit'

export const menu = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.menu.append(action.payload)
    },
    remove: (state, action) => {
      state.menu = state.menu.filter(item => {
        return item !== action.payload
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = menu.actions

export default menu.reducer
