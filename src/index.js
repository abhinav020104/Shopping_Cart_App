import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
    <App />
    <Toaster></Toaster>
  </Provider>
  </BrowserRouter>
);
