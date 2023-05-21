import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App";
import "./style/style.css";


const Root = ReactDOM.createRoot(
    document.querySelector("#root")
);


Root.render(
    <App />
);