import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from "common/types/commonTypes";

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
        updatePost: builder.mutation<User, Partial<User> & Pick<User, 'key'>>({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({key, ...patch}) => ({
                url: `users/${key}`,
                method: 'PUT',
                body: patch,
            }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: User }, meta, arg) => response.data,
            // invalidatesTags: ['User'],
            // onQueryStarted is useful for optimistic updates
            // The 2nd parameter is the destructured `MutationLifecycleApi`
            // async onQueryStarted(
            //     arg,
            //     { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            // ) {},
            // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
            // async onCacheEntryAdded(
            //     arg,
            //     {
            //         dispatch,
            //         getState,
            //         extra,
            //         requestId,
            //         cacheEntryRemoved,
            //         cacheDataLoaded,
            //         getCacheEntry,
            //     }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUserByNameQuery, useGetUserByKeyQuery, useGetUsersQuery} = userApi
