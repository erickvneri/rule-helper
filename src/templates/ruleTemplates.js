// Basic templates
import and from "./templates/and.json";
import between from "./templates/between.json";
import ifElse from "./templates/ifElse.json";
import ifGreaterThan from "./templates/ifGreaterThan.json";
import ifGreaterThanOrEquals from "./templates/ifGreaterThanOrEquals.json";
import ifNot from "./templates/ifNot.json";
import lessThan from "./templates/lessThan.json";
import lessThanOrEquals from "./templates/lessThanOrEquals.json";
import or from "./templates/or.json";
// Advanced templates
import sleep from "./templates/sleep.json";
import nestedIf from "./templates/nestedIf.json";

const BasicTemp = [
  { label: "And operator", value: and },
  { label: "Or operator", value: or },
  { label: "If Else", value: ifElse },
  { label: "If Not", value: ifNot },
  { label: "If Greater Than", value: ifGreaterThan },
  { label: "If Greater Than or Equals", value: ifGreaterThanOrEquals },
  { label: "If less Than", value: lessThan },
  { label: "If less Than or Equals", value: lessThanOrEquals },
  { label: "Between", value: between },
];

const AdvancedTemp = [
  { label: "Nested If Condition", value: nestedIf },
  { label: "Sleep", value: sleep },
  { label: "", value: "" },
];


export {
  BasicTemp,
  AdvancedTemp
};
