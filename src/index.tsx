import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import resources from "./lang.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
