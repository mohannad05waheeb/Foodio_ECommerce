import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from './Slices/favoritesSlice';
import cartReducer from "./Slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// دمج الريدويسر
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});

// إعداد redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
