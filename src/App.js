import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Switch>
      <Route exact path="/">
        <Home setIsLogged={setIsLogged} isLogged={isLogged}></Home>
      </Route>
      <Route path="/Logged">
        <AppPage isLogged={isLogged}></AppPage>
      </Route>
    </Switch>
  );
}

export default App;
