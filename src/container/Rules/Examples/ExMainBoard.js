import React from "react";
import ExBaseboard from "./Exbaseboard";
import RulesData from "./Rules.json";

const ExMainBoard = (props) => {
  let TotalBaseBoard = [];
  let validationArray = RulesData[props.ruleID].validationArray;
  if (props.usePropsValidityArray !== null) {
    validationArray = props.usePropsValidityArray;
  }
  let identifier = RulesData[props.ruleID].valuesArray;
  if (props.usePropsIdentifier !== null) {
    identifier = props.usePropsIdentifier;
  }
  let changeHandler = () => {};
  if (props.change !== null) {
    changeHandler = props.change;
  }

  for (let i = 0; i < 9; i++) {
    TotalBaseBoard.push(
      <table>
        <tr>
          <td style={{ backgroundColor: "lightblue", margin: "2px" }}>
            <ExBaseboard
              currentRow={i}
              identifier={identifier[i]}
              validityArray={validationArray[i]}
              changeHandler={changeHandler}
              key={i++}
            />
          </td>
          <td style={{ backgroundColor: "lightgreen", margin: "2px" }}>
            <ExBaseboard
              currentRow={i}
              identifier={identifier[i]}
              validityArray={validationArray[i]}
              changeHandler={changeHandler}
              key={i++}
            />
          </td>
          <td style={{ backgroundColor: "lightpink", margin: "2px" }}>
            <ExBaseboard
              currentRow={i}
              identifier={identifier[i]}
              validityArray={validationArray[i]}
              changeHandler={changeHandler}
            />
          </td>
        </tr>
      </table>
    );
  }
  return TotalBaseBoard;
};

export default ExMainBoard;
