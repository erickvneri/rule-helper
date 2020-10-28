import React from "react";
import "./App.scss";
// Components
import Navigation from "./components/Navigation";
import RuleBuilder from "./components/RuleBuilder";
import RuleTemplates from "./components/RuleTemplates";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <main>
      <Navigation />
      <Switch>
        <Route path='/rule-templates' component={RuleTemplates} exact/>
        <Route path='/rule-builder' component={RuleBuilder} exact/>
      </Switch>
    </main>
  );
};

export default App;
