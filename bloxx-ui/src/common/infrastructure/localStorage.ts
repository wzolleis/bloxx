import {AppState} from "app/state/store";

const key = "bloxx/state"

export const loadState = (): Partial<AppState> | undefined=> {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: Partial<AppState>) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        // Ignore write errors (for now)
    }
};