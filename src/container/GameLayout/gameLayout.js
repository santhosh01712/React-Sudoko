import React, { Component } from "react";
import Mainboard from "../mainboard/mainboard";
import { connect } from "react-redux";
import * as actionCreators from "../../store/action/actionDefalut";

class GameLayout extends Component {
  state = {
    solvingWithguide: false,
  };
  changeHandler = (event, changeType) => {
    if (changeType === "levelType") {
      this.props.loadGame(event.target.value, +this.props.level);
    } else {
      this.props.loadGame(this.props.levelType, +event.target.value);
    }
  };
  shouldComponentUpdate(prevState, prevProps) {
    if (prevProps !== this.props) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row m-2 mt-5">
            <div className="jumbotron col-lg-3 col-md-4 col-sm-12">
              <h5 className="text-warning">Select Game Level</h5>
              <select
                onChange={(event) => this.changeHandler(event, "levelType")}
                value={this.props.levelType}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <h5 className="text-warning mt-2">Select Game</h5>
              <select
                onChange={(event) => this.changeHandler(event, "levelNumber")}
                value={this.props.level}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="m-2"></div>
              <h3 className="text-center text-info">Your Score</h3>
              <h3 className="text-center">{this.props.score}</h3>
              <strong className="text-success text-center">
                {this.props.successMessage}
              </strong>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-12 offset-1">
              {this.props.dataFetched ? (
                <Mainboard solvingWithQuide={this.state.solvingWithguide} />
              ) : null}
            </div>
            <div className="jumbotron col-lg-3 col-md-4 col-sm-12">
              <button
                className="btn btn-info"
                onClick={() => {
                  this.setState({
                    solvingWithguide: !this.state.solvingWithguide,
                  });
                }}
              >
                Solve with guide
              </button>
              {this.state.solvingWithguide ? (
                <div className="mt-3">
                  <h5>{this.props.guideMessage}</h5>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataFetched: state.dataFetched,
    levelType: state.levelType,
    level: state.level,
    score: state.score,
    successMessage: state.successMessage,
    guideMessage: state.guideMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadGame: (levelType, levelNumber) =>
      dispatch(actionCreators.loadGame(levelType, levelNumber)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GameLayout);
