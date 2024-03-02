import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import store from "./context/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
