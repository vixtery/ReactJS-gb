import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import infoReducer from "./infoReducer";
import { useReducer } from "react";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["info"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  info: infoReducer,
  user: useReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

// import { combineReducers, applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import chatsReducer from "./chatsReducer";
// import user from "./userReducer";
// import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//   chatsReducer,
//   user,
//   test,
// });

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))

// );
