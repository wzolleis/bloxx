import {User} from "common/types/commonTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "app/state/store";
import {remove, update} from "utils/arrayUtils";
import objectKeys from "app/state/objectKeys";

interface UserState {
    users: User[]
}

const initialUser: User = {
    key: objectKeys.user.jack,
    name: 'Jack',
}

const initialState: UserState = {
    users: [initialUser]
}

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUserAction: (state: UserState, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        updateUserAction: (state: UserState, action: PayloadAction<User>) => {
            state.users = update(state.users, action.payload)
        },
        removeUserAction: (state: UserState, action: PayloadAction<User>) => {
            state.users = remove(state.users, action.payload.key)
        },
        listUserAction: (state: UserState, action: PayloadAction<Array<User>>) => {
            state.users = action.payload
        }
    }
})

export const {createUserAction, updateUserAction, listUserAction, removeUserAction} = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserState = (state: AppState) => state.userState

export default usersSlice.reducer