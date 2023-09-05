import React, { Component } from "react";
import "./baseboard.css";

class Baseboard extends Component {
  render() {
    let sudokuBox = [];
    let innerElement = [];
    for (let i = 0; i < 9; i++) {
      let styleBox = "red";
      if (this.props.validityArray[i]) {
        styleBox = "white";
      }
      innerElement.push(
        <input
          style={{ backgroundColor: styleBox }}
          type="tel"
          key={i}
          maxLength="1"
          onChange={(event) =>
            this.props.change(event, this.props.targetbox, i)
          }
          value={
            +this.props.identifier[i] === 0 ? "" : this.props.identifier[i]
          }
        />
      );
      if ((i === 2) | (i === 5) | (i === 8)) {
        sudokuBox.push(
          <div className="singlebox" key={i + "DivElement"}>
            {innerElement}
          </div>
        );
        innerElement = [];
      }
    }
    return (
      <React.Fragment>
        <div className="totalBox">{sudokuBox}</div>
      </React.Fragment>
    );
  }
}

export default Baseboard;
