import { React, useState } from "react";
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
      <h1 className="title">Rule Templates</h1>
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
              mode="json"
              theme="monokai"
              name="textarea"
              value={rule}
              editorProps={{ $blockScrolling: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplates;
