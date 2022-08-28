import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GetApiHelper = (context, filter) => {
  const body = {
    context,
    filter: filter,
  }
  return body
}

export const AddVenueHelper = (context, updateBody) => {
  const body = {
    context,
    update: updateBody
  }
  return body
}

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strong-lights-shout-103-142-31-94.loca.lt/',
  }),
  endpoints: builder => ({
    getEventType: builder.mutation({
      query: body => ({
        url: '/getinfo',
        method: 'POST',
        body: body,
      }),
    }),

    addVenuePoll: builder.mutation({
      query: body => ({
        url: '/generic',
        method: 'POST',
        body
      })
    }),

    getNotification: builder.mutation({
      query: body => ({
        url: '/getinfo',
        method: 'POST',
        body: body
      })
    })
  }),
})
// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetEventTypeMutation, useAddVenuePollMutation, useGetNotificationMutation } = apiSlice