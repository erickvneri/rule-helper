import { React, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "../App.scss";


function RuleBuilder() {
  let defaultState = {name: "", actions: []}
  const [rule] = useState(JSON.stringify(defaultState, null, 2));
  return (
    <div className="App">

      <div className="container">
      <h1 className="title">Rule Builder</h1>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <div className="left-menu">
              <p>Logic here</p>
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

export default RuleBuilder;
