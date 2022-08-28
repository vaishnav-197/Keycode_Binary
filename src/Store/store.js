import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './EventSlice'
import hotelReducer from './HotelSlice'
import menuReducer from './MenuSlice'
import venueReducer from './VenueSlice'
import { apiSlice } from '../Api/apiSlice'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    hotel: hotelReducer,
    menu: menuReducer,
    venue: venueReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
