import { React, useState } from "react";

import ButtonRow from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "../App.scss";
// Rules
import Examples from "../templates/ruleExamples";

function RuleExamples() {
  const [rule, setRule] = useState("{}");
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">Rule Examples</h1>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <div className="left-menu">
              <div className="block">
                {Examples.map((rule) => {
                  return <button className="button" onClick={() => setRule(JSON.stringify(rule.value, null, 2))}>{rule.label}</button>
                })}
              </div>
            </div>
          </div>
          <div className="column">
            <div id="example">
              <AceEditor
	      height="600px"
	      width="650px"
              mode="json"
              theme="monokai"
              name="textarea"
              value={rule}
              editorProps={{ $blockScrolling: true }}
	      setOptions={{ fontSize: 15 }}
              />
            </div>
          </div>
        </div>
      <ButtonRow style={{width: "150%"}}>
        <Link to="/">
          <Button className="button" style={{width: "22%"}}>Home</Button>
        </Link>
        <Link to="/basic-templates">
          <Button className="button" style={{width: "22%"}}>Basic Templates</Button>
        </Link>
        <Link to="/advanced-templates">
          <Button className="button" style={{width: "22%"}}>Advanced Templates</Button>
        </Link>
      </ButtonRow>
      </div>
    </div>
  );
};

export default RuleExamples;
