import React, { Component } from "react";
import Baseboard from "../baseboard/baseboard";
import { connect } from "react-redux";
import * as actionCreators from "../../store/action/actionDefalut";

class Mainboard extends Component {
  state = {
    presubmit: false,
  };
  changeHanlder = (event, targetbox, targetindex) => {
    this.props.handleAnswers(targetbox, targetindex, +event.target.value);
    if (this.props.solvingWithQuide && event.target.value !== "") {
      this.props.guideTheUser(
        targetbox,
        targetindex,
        this.props.currentGameQuestion,
        +event.target.value,
        this.props.currentGameAnswer[targetbox][targetindex]
      );
    } else if (this.props.solvingWithQuide && event.target.value === "") {
      this.props.presubmitHandler(Array(9).fill(Array(9).fill(true)));
    }
  };
  presubmitHandler = () => {
    let newArray = [];
    if (this.state.presubmit) {
      newArray = Array(9).fill(Array(9).fill(true));
    } else {
      for (let x = 0; x < 9; x++) {
        let innerArray = [];
        for (let y = 0; y < 9; y++) {
          if (
            this.props.currentGameQuestion[x][y] ===
            this.props.currentGameAnswer[x][y]
          )
            innerArray.push(true);
          else {
            innerArray.push(false);
          }
        }
        newArray.push(innerArray);
      }
    }
    this.props.presubmitHandler(newArray);
    this.setState({ presubmit: !this.state.presubmit });
  };
  submitHandler = () => {
    let currGameQuecopy = [...this.props.currentGameQuestion];
    let cureGameAnscopy = [...this.props.currentGameAnswer];
    let gameCompleted = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (currGameQuecopy[i][j] !== cureGameAnscopy[i][j]) {
          gameCompleted = false;
        }
      }
    }
    if (!gameCompleted) {
      this.presubmitHandler();
    } else {
      console.log("calculating score");
      this.props.calculateScore();
      if (this.props.level <= 2) {
        setTimeout(() => {
          this.props.loadGame(this.props.levelType, this.props.level + 1);
        }, 3000);
      } else {
        let levelType = "hard";
        if (this.props.levelType === "easy") {
          levelType = "medium";
        } else if (this.props.levelType === "medium") {
          levelType = "hard";
        }
        setTimeout(() => {
          this.props.loadGame(levelType, 1);
        }, 3000);
      }
    }
  };
  render() {
    // let TotalBaseBoard = [];
    // for (let i = 0; i < 9; i++) {
    //   TotalBaseBoard.push(
    //     <div
    //       className="row"
    //       key={i + "row"}
    //       style={{
    //         display: "grid",
    //         gap: "10px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           backgroundColor: "lightblue",
    //           margin: "2px",
    //         }}
    //       >
    //         <Baseboard
    //           targetbox={i}
    //           identifier={this.props.currentGameQuestion[i]}
    //           validityArray={this.props.validityArray[i]}
    //           change={(event, i, targetindex) =>
    //             this.changeHanlder(event, i, targetindex)
    //           }
    //           key={i++}
    //         />
    //       </div>
    //       <div style={{ backgroundColor: "lightgreen", margin: "2px" }}>
    //         <Baseboard
    //           targetbox={i}
    //           identifier={this.props.currentGameQuestion[i]}
    //           validityArray={this.props.validityArray[i]}
    //           change={(event, i, targetindex) =>
    //             this.changeHanlder(event, i, targetindex)
    //           }
    //           key={i++}
    //         />
    //       </div>
    //       <div style={{ backgroundColor: "lightpink", margin: "2px" }}>
    //         <Baseboard
    //           targetbox={i}
    //           identifier={this.props.currentGameQuestion[i]}
    //           validityArray={this.props.validityArray[i]}
    //           change={(event, i, targetindex) =>
    //             this.changeHanlder(event, i, targetindex)
    //           }
    //         />
    //       </div>
    //     </div>
    //   );
    // }
    let TotalBaseBoard = [];
    for (let i = 0; i < 9; i++) {
      TotalBaseBoard.push(
        <tr>
          <td
            style={{
              backgroundColor: "lightblue",
              margin: "2px",
            }}
          >
            <Baseboard
              targetbox={i}
              identifier={this.props.currentGameQuestion[i]}
              validityArray={this.props.validityArray[i]}
              change={(event, i, targetindex) =>
                this.changeHanlder(event, i, targetindex)
              }
              key={i++}
            />
          </td>
          <td style={{ backgroundColor: "lightgreen", margin: "2px" }}>
            <Baseboard
              targetbox={i}
              identifier={this.props.currentGameQuestion[i]}
              validityArray={this.props.validityArray[i]}
              change={(event, i, targetindex) =>
                this.changeHanlder(event, i, targetindex)
              }
              key={i++}
            />
          </td>
          <td style={{ backgroundColor: "lightpink", margin: "2px" }}>
            <Baseboard
              targetbox={i}
              identifier={this.props.currentGameQuestion[i]}
              validityArray={this.props.validityArray[i]}
              change={(event, i, targetindex) =>
                this.changeHanlder(event, i, targetindex)
              }
            />
          </td>
        </tr>
      );
    }
    return (
      <div className="container">
        <table>{TotalBaseBoard}</table>

        <table style={{ justifyContent: "space-between" }}>
          <tr>
            <td>
              <button
                type="button"
                className="btn mt-2 mr-2 ml-3"
                style={{ backgroundColor: "lightgreen" }}
                onClick={() =>
                  this.props.refreshGame(this.props.levelType, this.props.level)
                }
              >
                Refresh
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn mt-2 mr-2 ml-3"
                style={{ backgroundColor: "lightpink" }}
                onClick={this.presubmitHandler}
              >
                Check
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn mt-2 ml-3"
                style={{ backgroundColor: "lightblue" }}
                onClick={this.submitHandler}
              >
                Submit
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  return {
    currentGameQuestion: state.currentGameQuestion,
    currentGameAnswer: state.currentGameAnswer,
    validityArray: state.validityArray,
    levelType: state.levelType,
    level: state.level,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAnswers: (row, column, value) =>
      dispatch(actionCreators.handleAnswers(row, column, value)),
    presubmitHandler: (newArray) =>
      dispatch(actionCreators.presubmitHandler(newArray)),
    refreshGame: (levelType, level) =>
      dispatch(actionCreators.refreshGame(levelType, level)),
    calculateScore: () => dispatch(actionCreators.calculateScore()),
    loadGame: (levelType, levelNumber) =>
      dispatch(actionCreators.loadGame(levelType, levelNumber)),
    guideTheUser: (targetbox, targetindex, array, value, answer) =>
      dispatch(
        actionCreators.guideTheUser(
          targetbox,
          targetindex,
          array,
          value,
          answer
        )
      ),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Mainboard);
