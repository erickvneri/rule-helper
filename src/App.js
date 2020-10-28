import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "./App.scss";
// JSON Rules
import bonVoyage from "./rules/bonVoyage.json";
import brightenMyPath from "./rules/brightenMyPath.json";
import buttonIsPressed from "./rules/buttonIsPressed.json";
import camerasOnWhenImAway from "./rules/camerasOnWhenImAway.json";
import changeSecurityState from "./rules/changeSecurityState.json";
import closeGarageWhenGone from "./rules/closeGarageWhenGone.json";
import darkenBehindMe from "./rules/darkenBehindMe.json";
import doorLockUpWhenClosed from "./rules/doorLockUpWhenClosed.json";
import doorLocksOrUnlocks from "./rules/doorLocksOrUnlocks.json";
import doorUnlockWhenHome from "./rules/doorUnlockWhenHome.json";
import dropsBelow from "./rules/dropsBelow.json";
import dropsToOrBelow from "./rules/dropsToOrBelow.json";
import ifMotionBetween from "./rules/ifMotionBetween.json";
import itsTooCold from "./rules/itsTooCold.json";
import itsTooHot from "./rules/itsTooHot.json";
import lightFollowsMe from "./rules/lightFollowsMe.json";
import lightTurnOffDeparture from "./rules/lightTurnOffDeparture.json";
import lightTurnOffMotion from "./rules/lightTurnOffMotion.json";
import lightTurnOffSchedule from "./rules/lightTurnOffSchedule.json";
import lightTurnOnIfDoor from "./rules/lightTurnOnIfDoor.json";
import lightTurnOnMotion from "./rules/lightTurnOnMotion.json";
import lightUpNight from "./rules/lightUpNight.json";
import lockItWhenILeave from "./rules/lockItWhenILeave.json";
import notifyWhenDoorOpen from "./rules/notifyWhenDoorOpen.json";
import openGarageOnSwitch from "./rules/openGarageOnSwitch.json";
import openGarageWhenHome from "./rules/openGarageWhenHome.json";
import openGarageWhenHomeAlt from "./rules/openGarageWhenHomeAlt.json";
import risesAbove from "./rules/risesAbove.json";
import risesToOrAbove from "./rules/risesToOrAbove.json";
import scheduledModeChange from "./rules/scheduledModeChange.json";
import somethingTurnsOnOff from "./rules/somethingTurnsOnOff.json";
import theBigSwitch from "./rules/theBigSwitch.json";
import turnItOnFor5Minutes from "./rules/turnItOnFor5Minutes.json";
import turnItOnWhenImHere from "./rules/turnItOnWhenImHere.json";
import turnOnArrival from "./rules/turnOnArrival.json";
import turnOnOffInterval from "./rules/turnOnOffInterval.json";
import turnOnSchedule from "./rules/turnOnSchedule.json";
import turnOnSunrise from "./rules/turnOnSunrise.json";
import turnOnSunset from "./rules/turnOnSunset.json";
import unlockItWhenIArrive from "./rules/unlockItWhenIArrive.json";


function onChange(newValue) {
  console.log("change", newValue);
}

// function loadFile(file) {
//   console.log(file)
// }

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
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(buttonIsPressed, null, 4))}>Button Is Pressed</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(camerasOnWhenImAway, null, 4))}>Cameras On When I"m Away</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(changeSecurityState, null, 4))}>Change Security State</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(closeGarageWhenGone, null, 4))}>Close Garage When Gone</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(darkenBehindMe, null, 4))}>Darken Behind Me</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(doorLockUpWhenClosed, null, 4))}>Door Lock Up When Closed</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(doorLocksOrUnlocks, null, 4))}>Door Locks or Unlocks</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(doorUnlockWhenHome, null, 4))}>Door Unlock When Home</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(dropsBelow, null, 4))}>Drops Below</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(dropsToOrBelow, null, 4))}>Drops To or Below</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(ifMotionBetween, null, 4))}>If Motion Between</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(ifMotionBetween, null, 4))}>If Motion Between</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(itsTooCold, null, 4))}>Its Too Cold</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(itsTooHot, null, 4))}>Its Too Hot</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightFollowsMe, null, 4))}>Light Follows Me</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightTurnOffDeparture, null, 4))}>Light Turn Off Departure</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightTurnOffMotion, null, 4))}>Light Turn Off Motion</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightTurnOffSchedule, null, 4))}>Light Turn Off Schedule</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightTurnOnIfDoor, null, 4))}>Light Turn On If Door</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightTurnOnMotion, null, 4))}>Light Turn On Motion</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lightUpNight, null, 4))}>Light Up Night</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(lockItWhenILeave, null, 4))}>Lock It When I Leave</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(notifyWhenDoorOpen, null, 4))}>Notify When Door Open</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(openGarageOnSwitch, null, 4))}>Open Garage On Switch</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(openGarageWhenHome, null, 4))}>Open Garage When Home</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(openGarageWhenHomeAlt, null, 4))}>Open Garage When Home Alt</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(risesAbove, null, 4))}>Rises Above</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(risesToOrAbove, null, 4))}>Rises To or Above</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(scheduledModeChange, null, 4))}>Scheduled Mode Change</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(somethingTurnsOnOff, null, 4))}>Something Turns On Off</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(theBigSwitch, null, 4))}>The Big Switch</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnItOnFor5Minutes, null, 4))}>Turn It On for 5 Minutes</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnItOnWhenImHere, null, 4))}>Turn It On When I'm Here</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnOnArrival, null, 4))}>Turn On Arrival</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnOnOffInterval, null, 4))}>Turn On-Off Interval</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnOnSchedule, null, 4))}>Turn On Schedule</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnOnSunrise, null, 4))}>Turn On Sunrise</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(turnOnSunset, null, 4))}>Turn On Sunset</button>
              </div>
              <div className="block">
                <button className="button" onClick={() => setRule(JSON.stringify(unlockItWhenIArrive, null, 4))}>Unlock It When I Arrive</button>
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
