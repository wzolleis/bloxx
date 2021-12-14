import {AppDispatch} from "app/state/store";
import axios, {AxiosResponse} from "axios";
import {Post} from "common/types/commonTypes";
import {listPosts, updatePost} from "domain/post/state/postSlice";

const restApi = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000
});


export const findAllPosts = () => async (dispatch: AppDispatch) => {
    // dispatch(action.start)
    const response = await restApi.get<Post[]>("/posts")
    dispatch(listPosts(response.data))
}

export const savePost = (post: Post) => async (dispatch: AppDispatch) => {
    const url = `/posts/${post.id}`
    const updateResponse = await restApi.put<Post, AxiosResponse<Post>>(url, post)
    dispatch(updatePost(updateResponse.data))
}