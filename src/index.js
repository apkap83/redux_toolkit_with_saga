import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import catsReducer from "./catState";
import watchFetchCats from "./catSaga";
import logger from "redux-logger";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [logger, saga],
});

saga.run(watchFetchCats);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
