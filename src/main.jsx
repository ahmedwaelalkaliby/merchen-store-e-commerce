import React from "react";
import ReactDOM from "react-dom/client";
// redux
import { Provider } from "react-redux";
import store from "./store/store.js";

// style
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
