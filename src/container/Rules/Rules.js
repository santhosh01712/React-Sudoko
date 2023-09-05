import React from "react";
import RuleOne from "./Examples/RuleOne";
import RuleTwo from "./Examples/RuleTwo";

const Rules = () => {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="jumbotron">
          <h3 className="text-center">Sudoko Basics</h3>
          <ul>
            <li>
              <strong>The Elements in a 3x3 container are identical </strong>
            </li>
            <RuleOne />
            <div className="m-5"> </div>
            <li>
              <strong>The Elements in a rows and colums are identical </strong>
            </li>
            <RuleTwo />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rules;
