import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./companent/root/App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from './redux/reducers/configureStore'


const store= configureStore()

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
