import React, { Component } from "react";
import "./Exbaseboard.css";

class ExBaseboard extends Component {
  render() {
    let sudokuBox = [];
    let innerElement = [];
    for (let i = 0; i < 9; i++) {
      let styleBox = "salmon";
      if (this.props.validityArray[i]) {
        styleBox = "white";
      }
      innerElement.push(
        <input
          style={{ backgroundColor: styleBox }}
          type="tel"
          key={i}
          maxLength="1"
          value={
            +this.props.identifier[i] === 0 ? "" : this.props.identifier[i]
          }
          onChange={(event) => {
            this.props.changeHandler(event, this.props.currentRow, i);
          }}
        />
      );
      if ((i === 2) | (i === 5) | (i === 8)) {
        sudokuBox.push(
          <div className="exsinglebox" key={i + "DivElement"}>
            {innerElement}
          </div>
        );
        innerElement = [];
      }
    }
    return (
      <React.Fragment>
        <div className="extotalBox">{sudokuBox}</div>
      </React.Fragment>
    );
  }
}

export default ExBaseboard;
