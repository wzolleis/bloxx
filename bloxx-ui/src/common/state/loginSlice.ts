import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "app/state/store";
import {AppError, ObjectKey} from "common/types/commonTypes";

export interface UserData {
    user?: ObjectKey
}

interface LoginState {
    credentials: UserData
}

const initialState: LoginState = {
    credentials: {}
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogin: (state: LoginState, action: PayloadAction<UserData>) => {
            state.credentials = action.payload
        },
        userLogout: (state: LoginState) => {
            state = initialState
        },
    }
})

export const {userLogin, userLogout} = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoginState = (state: AppState) => state.loginState

export default loginSlice.reducer
