import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";

const appReducer = combineReducers({
  authReducer,
});

/**
 * This is root state handler on sign out it will
 * clean all the data in all other reducer.
 *
 * @param state
 * @param action
 *
 */
const rootReducer = (state, action) => {
  //   if (action.type === USER_SIGN_OUT) {
  //     return { userReducer: {} };
  //   }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settingsReducer"],
};

export default persistReducer(persistConfig, rootReducer);
