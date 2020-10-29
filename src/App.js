import React from "react";
import "./App.scss";
// Components
import RuleTemplates from "./components/RuleTemplates";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={RuleTemplates} exact/>
      </Switch>
    </main>
  );
};

export default App;
