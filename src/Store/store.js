import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './EventSlice'
import phoneReducer from './PhoneNumber'
import { apiSlice } from '../Api/apiSlice'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    phone: phoneReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
