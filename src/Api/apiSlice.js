import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GetApiHelper = (context, filter) => {
  const body = {
    context,
    filter: filter,
  }
  return body
}

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dirty-pears-swim-103-142-31-94.loca.lt/',
  }),
  endpoints: builder => ({
    getEventType: builder.mutation({
      query: body => ({
        url: '/getinfo',
        method: 'POST',
        body: body,
      }),
    }),
  }),
})
// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetEventTypeMutation } = apiSlice
