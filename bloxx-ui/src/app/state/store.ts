import {configureStore} from '@reduxjs/toolkit'
import userReducer from 'domain/user/state/userSlice'
import fetchingReducer from 'common/state/fetchingSlice'
import loginReducer from 'domain/login/state/loginSlice'
import bloxxReducer from 'domain/bloxx/state/bloxxSlice'

const store = configureStore({
    reducer: {
        fetchingState: fetchingReducer,
        loginState: loginReducer,
        userState: userReducer,
        bloxxState: bloxxReducer
    },
})


// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {players: PlayerState, selection: SelectionState, fetching: FetchingState}
export type AppDispatch = typeof store.dispatch

export default store