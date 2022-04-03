import {createStore, compose, combineReducers } from "redux"
import {counterReducer} from "./counter";//импортируем counterReducer

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers())//создали наше хранилище и передаем в него counterReducer
export type RootState = ReturnType<typeof store.getState>;