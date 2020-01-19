import * as React from 'react'  
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";

import appStore from "./store";

import App from "./components/App";



ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);  