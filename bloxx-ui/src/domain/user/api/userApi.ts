import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { User} from "common/types/commonTypes";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'api/userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({url: "/users"}),
            // Pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response: { data: User[] }) => response.data,
        }),
        getUserByName: builder.query<User[], string>({
            query: (name) => `/users?name=${name}`,
        }),
        getUserByKey: builder.query<User[], string>({
            query: (key) => `/users?key=${key}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUserByNameQuery, useGetUserByKeyQuery, useGetUsersQuery} = userApi
