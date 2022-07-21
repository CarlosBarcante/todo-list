import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListReducer";

const SAVED_ITEMS = 'savedItems';

const store = configureStore({ reducer: ListReducer });

function persisteState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

store.subscribe(() => { persisteState(store.getState()) });

export default store;