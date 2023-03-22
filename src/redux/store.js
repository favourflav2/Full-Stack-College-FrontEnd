import { configureStore } from "@reduxjs/toolkit";
import collegeSlice from "./features/collegeSlice";
import authSlice from "./features/authSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// export const store = configureStore({
//     reducer:{
//         college: collegeSlice,
//         auth:authSlice
//     }
// })

const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
  college: collegeSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),

})
