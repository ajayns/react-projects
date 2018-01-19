import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "../js/store/index";
import App from "../js/components/App";

// Provider to init redux store with app
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);