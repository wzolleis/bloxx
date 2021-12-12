import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "app/state/store";
import {Post} from "common/types/commonTypes";
import {remove, update} from "utils/arrayUtils";


interface PostState {
    posts: Post[]
}

const initialState: PostState = {posts: []}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state: PostState, action: PayloadAction<Post>) => {
            state.posts.push(action.payload)
        },
        removePost: (state: PostState, action: PayloadAction<Post>) => {
            state.posts = remove(state.posts, action.payload.key)
        },
        updatePost: (state: PostState, action: PayloadAction<Post>) => {
            state.posts = update(state.posts, action.payload)
        },
        listPosts: (state: PostState, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        }
    }
})

export const {actions} = postSlice

const {reducer} = postSlice

export const {createPost, removePost, updatePost, listPosts} = actions

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: AppState) => state.postState

export default reducer
