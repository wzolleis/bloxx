import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from "common/types/commonTypes";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'api/userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users"
        }),
        getUserByName: builder.query<User, string>({
            query: (name) => `/users?name=${name}`,
        }),
        // The `getPosts` endpoint is a "query" operation that returns data
        getPosts: builder.query<User[], void>({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/posts'
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUserByNameQuery, useGetUsersQuery, useGetPostsQuery} = userApi
