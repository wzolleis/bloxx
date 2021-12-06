// import {actions} from "domain/post/state/postSlice";
import {AppDispatch} from "app/state/store";
import axios from "axios";
import {Post} from "common/types/commonTypes";
import {listPosts} from "domain/post/state/postSlice";

const restApi = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000
});


export const findAllPosts = () => async (dispatch: AppDispatch) => {
    // dispatch(action.start)
    const response = await restApi.get<Post[]>("/posts")
    // dispatch result
    dispatch(listPosts(response.data))
}
