import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Users from "./components/Users";
import {useState} from "react";
import Documentation from "./components/Documentation";

const App = () => {
  const [activeUsers, setactiveUsers] = useState<Boolean>(false);
  const [user, setUser] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header message="welcome.message" />
                <Body setUserId={setUser} />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Header message="welcome.message.desc" />
                <About />
              </>
            }
          />
          <Route
            path="users"
            element={
              <>
                <Header message="navbar.users.message" />
                <Users />
              </>
            }
          />
          <Route
            path="documentation"
            element={
              <>
                <Header message="navbar.doc.message" />
                <Documentation />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
