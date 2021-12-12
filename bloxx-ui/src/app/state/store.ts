import {configureStore} from '@reduxjs/toolkit'
import fetchingReducer from 'common/state/fetchingSlice'
import loginReducer from 'domain/login/state/loginSlice'
import postReducer from 'domain/post/state/postSlice'
import {userApi} from "domain/user/api/userApi";

const store = configureStore({
    reducer: {
        fetchingState: fetchingReducer,
        loginState: loginReducer,
        postState: postReducer,
        // eslint-disable-next-line
        ["api/userApi"]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})


// Speichert den state im local storage des browsers
// store.subscribe(throttle(() => {
//     saveState({
//         postState: store.getState().postState
//     });
// }, 1000));


// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {players: PlayerState, selection: SelectionState, fetching: FetchingState}
export type AppDispatch = typeof store.dispatch

export default store