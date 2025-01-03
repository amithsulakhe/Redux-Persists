import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice";
import { persistReducer } from "redux-persist";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

import createWebStorage from "redux-persist/es/storage/createWebStorage";
import persistStore from "redux-persist/es/persistStore";

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const reducer = combineReducers({
  userName: userSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = initialState;
  }

  return reducer(state, action);
};


const persistData = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistData,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

const { dispatch } = store;
const persister = persistStore(store);

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;
export { store, persister, dispatch, useSelector, useDispatch };

export default store;
