import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userDataSlice from "./userData/userData";
import authenticationDataSlice from "./authenticationData/authenticationData";

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  userDataSlice: userDataSlice,
  authenticationDataSlice: authenticationDataSlice,
});

// Configuration for redux-persist to persist the Redux store
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer with redux-persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store: any = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

// Define RootState type for type-checking throughout the application
export type RootState = ReturnType<typeof store.getState>;

// Export the configured Redux store as the default export
export default store;
