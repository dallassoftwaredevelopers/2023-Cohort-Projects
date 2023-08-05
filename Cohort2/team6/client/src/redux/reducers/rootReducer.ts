import { combineReducers } from "redux";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import userReducer from "./userReducer";
import evenstReducer from "./eventsReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  user: userReducer,
  events: evenstReducer
  // Add other reducers here if you have more
});

export default persistReducer(persistConfig, rootReducer);
