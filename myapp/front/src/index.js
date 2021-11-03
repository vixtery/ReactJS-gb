import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import  { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";



ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
