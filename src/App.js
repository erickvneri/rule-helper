import React, { useState } from 'react';



import './App.scss';
import AceEditor from "react-ace";

import bonVoyage from './rules/bonVoyage.json'
import brightenMyPath from './rules/brightenMyPath.json'

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";




function onChange(newValue) {
  console.log("change", newValue);
}

function loadFile(file) {
  console.log(file)
}

function App() {
  const [rule, setRule] = useState("{}");
  return (
      <div className="App">
        
      <div className="container">
      <h1 className="title">Rule Helper</h1>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <div className="left-menu">
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(bonVoyage, null, 4))}>BonVoyage</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(brightenMyPath, null, 4))}>Brighten My Path</button>
              </div>
            </div>
          </div>
          <div className="column">
            <div id="example">
              <AceEditor
              mode="json"
              theme="monokai"
              onChange={onChange}
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
}

export default App;




