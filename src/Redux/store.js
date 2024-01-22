import { configureStore } from "@reduxjs/toolkit";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import TokenSlice from "./Features/Feature_1_GetToken/GetToken";
import loginSlice from "./Features/Feature_2_authentification/Login/Slice";
import profileSlice from "./Features/Screens/Profile/Slice";
import routesSlice from "./Features/Screens/Home/Slice";
import DetailsSlice from "./Features/Screens/DeliveryDetails/Slice";

const reducers = combineReducers({
  token: TokenSlice,
  auth: loginSlice,
  profile: profileSlice,
  routes: routesSlice,
  DetailsSlice
});

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
