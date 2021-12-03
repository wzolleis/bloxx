import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "app/state/store";
import {Bloxx} from "common/types/commonTypes";
import {remove, update} from "utils/arrayUtils";
import objectKeys from "app/state/objectKeys";


interface BloxxState {
    bloxx: Bloxx[]
}

const initialBloxx: Bloxx[] = [
    {
        key: objectKeys.bloxx.first,
        user: objectKeys.user.jack,
        title: 'Tom Bombadil',
        content: 'Der erste der da war und der letzte der geht'
    },
]

const initialState: BloxxState = {bloxx: initialBloxx}

export const bloxxSlice = createSlice({
    name: 'bloxx',
    initialState,
    reducers: {
        createBloxxAction: (state: BloxxState, action: PayloadAction<Bloxx>) => {
            state.bloxx.push(action.payload)
        },
        removeBloxxAction: (state: BloxxState, action: PayloadAction<Bloxx>) => {
            state.bloxx = remove(state.bloxx, action.payload.key)
        },
        updateBloxxAction: (state: BloxxState, action: PayloadAction<Bloxx>) => {
            state.bloxx = update(state.bloxx, action.payload)
        },
        listCitiesAction: (state: BloxxState, action: PayloadAction<Bloxx[]>) => {
            state.bloxx = action.payload
        }
    }
})

export const {createBloxxAction, removeBloxxAction, updateBloxxAction, listCitiesAction} = bloxxSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBloxx = (state: AppState) => state.bloxxState

export default bloxxSlice.reducer
