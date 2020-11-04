import { React, useState } from "react";

import ButtonRow from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "../App.scss";
// Rule Templates
import { BasicTemp } from "../templates/ruleTemplates";

function BasicTemplates() {
  const [rule, setRule] = useState("{}");
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">Basic Templates</h1>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <div className="left-menu">
              <div className="block">
                {BasicTemp.map((rule) => {
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
        <Link to="/rule-examples">
          <Button className="button" style={{width: "22%"}}>Rule Examples</Button>
        </Link>
        <Link to="/advanced-templates">
          <Button className="button" style={{width: "22%"}}>Advanced Templates</Button>
        </Link>
      </ButtonRow>
      </div>
    </div>
  );
};

export default BasicTemplates;
