import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./context/StateProvider";

import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
