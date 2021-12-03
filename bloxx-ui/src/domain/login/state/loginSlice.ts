import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "app/state/store";
import {AppError, ObjectKey} from "common/types/commonTypes";
import authenticationService from "domain/login/service/authenticationService";
import userRepository from "infrastructure/users/repository/userRepository";

interface LoginState {
    user: ObjectKey | undefined
}

const initialState: LoginState = {
    user: undefined

}

// First, create the thunk
export const loginUser = createAsyncThunk(
    'login',
    async (params: { email: string, password: string }, thunkAPI) => {
        return await authenticationService.authenticate(params)
    }
)


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
     },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginUser.fulfilled, (state, action) => {
            // Add user to the state array
            state.user = action.payload
        })
    },
})

// Other code such as selectors can use the imported `RootState` type
export const selectLoginState = (state: AppState) => state.loginState

export default loginSlice.reducer
