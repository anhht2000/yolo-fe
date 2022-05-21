import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import commonReducer from "./common.reducer";
import authReducer from "./auth.reducer";

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["isLogin", "user"],
};

const rootReducer = combineReducers({
  common: commonReducer,
  auth : persistReducer(persistConfigAuth, authReducer)
});

export default rootReducer;
