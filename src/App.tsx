import "./App.css";

import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import {useEffect} from "react";

const App = () => {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppBody></AppBody>
    </div>
  );
};

export default App;
