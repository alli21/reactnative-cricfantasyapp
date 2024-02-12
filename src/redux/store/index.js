import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Themereducer } from "../reducers/themeReducer.js";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// Set up a general reducer.
const rootReducer = combineReducers({
    theme: Themereducer,
});


// const Store = () => {
//     return createStore(rootReducer);
// }


const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistStorage = persistStore(store)




// export const Store = createStore(rootReducer, applyMiddleware());





