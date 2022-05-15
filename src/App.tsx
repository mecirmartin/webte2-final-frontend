import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome.message")}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            console.log("change");
            i18n.changeLanguage("sk");
          }}
        >
          Change language
        </button>
      </header>
    </div>
  );
};

export default App;
