import { combineReducers } from "redux";
//import movieReducer from "./movie/movieReducer"
import uiReducer from "./ui/uiReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "movie",
  storage,
  whitelist: ["ui"],
};

const rootReducer = combineReducers({
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
