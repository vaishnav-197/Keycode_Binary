import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './EventSlice'
import { apiSlice } from '../Api/apiSlice'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
