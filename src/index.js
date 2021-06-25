import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux"

import store from "./store/store"
import App from "./views/App"

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      
        <Route path={"/"} component={App}/>
      
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
