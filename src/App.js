import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
// Components
import RuleExamples from "./components/RuleExamples";
import BasicTemplates from "./components/BasicTemplates";
import AdvancedTemplates from "./components/AdvancedTemplates";

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={RuleExamples} exact/>
        <Route path='/basic-templates' component={BasicTemplates} exact/>
        <Route path='/advanced-templates' component={AdvancedTemplates} exact/>
      </Switch>
    </main>
  );
};

export default App;
