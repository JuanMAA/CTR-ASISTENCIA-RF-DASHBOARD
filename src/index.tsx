import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import esEs from "antd/es/locale/es_ES";

import { ConfigProvider } from "antd";

import "./index.css";
import "./less/main.less";
import "moment/locale/es";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={esEs}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
