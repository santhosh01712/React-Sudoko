import React, { Component } from "react";
import ExMainBoard from "./ExMainBoard";
import * as utilities from "./utility";

class RuleTwo extends Component {
  state = {
    myArray: Array(9).fill(Array(9).fill(0)),
    validity: Array(9).fill(Array(9).fill(true)),
    changeHandled: false,
  };
  tryNew = () => {
    this.setState({
      myArray: Array(9).fill(Array(9).fill(0)),
      validity: Array(9).fill(Array(9).fill(true)),
      changeHandled: false,
    });
  };
  changeHandler = (event, currentrow, index) => {
    let newArray = [...this.state.myArray];
    let singleArray = [...newArray[currentrow]];
    singleArray[index] = event.target.value;
    newArray[currentrow] = [...singleArray];
    let validitynew = Array(9).fill(Array(9).fill(true));
    if (event.target.value !== "") {
      validitynew = utilities.validityArray(currentrow, index);
    }
    this.setState({
      myArray: newArray,
      changeHandled: true,
      validity: validitynew,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <span>
              For Ex. in the below figure, here the no <strong>7</strong> is
              identical across the row, and the no <strong>7</strong> shouldn't
              be repeated in the red boxes
            </span>
            <div className="col-sm-12 offset-lg-3 mt-1">
              <ExMainBoard
                ruleID="rule2"
                change={null}
                usePropsValidityArray={null}
                usePropsIdentifier={null}
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <span>
              And also no <strong>7</strong> must be identical across the column
            </span>
            <div className="col-sm-12 offset-lg-3 mt-3">
              <ExMainBoard
                ruleID="rule3"
                change={null}
                usePropsValidityArray={null}
                usePropsIdentifier={null}
              />
            </div>
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <li>
            <strong>Combining Rule1 and Rule2</strong>
          </li>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <span>
              Now concluding from Rule 1 and Rule 2, an element must be
              identical across a Row and Column and within 3x3 cell
            </span>
            <div className="col-sm-12 offset-lg-3 mt-1">
              <ExMainBoard
                ruleID="rule4"
                change={null}
                usePropsValidityArray={null}
                usePropsIdentifier={null}
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <span>
              Considering <strong>7</strong> at this position, the red boxes can
              be filled with values as follows
            </span>
            <div className="col-sm-12 offset-lg-3 mt-3">
              <ExMainBoard
                ruleID="rule5"
                change={null}
                usePropsValidityArray={null}
                usePropsIdentifier={null}
              />
            </div>
          </div>
        </div>
        <div className="m-5"> </div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="col-lg-12 col-sm-12">
              Try to fill any box with a value and observe the result!!!
            </h3>
            <div className="offset-lg-3 col-lg-12 col-sm-12">
              <ExMainBoard
                ruleID="rule6"
                usePropsValidityArray={this.state.validity}
                usePropsIdentifier={this.state.myArray}
                change={this.changeHandler}
              />
              <button className="btn btn-info m-2" onClick={this.tryNew}>
                Try new
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RuleTwo;
