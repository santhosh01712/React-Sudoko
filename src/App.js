import React, { Component, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Dashboard from "./container/Dashboard/Dashboard";
import GameLayout from "./container/GameLayout/gameLayout";
import * as actionCreators from "./store/action/actionDefalut";
import Rules from "./container/Rules/Rules";
import { Route, Routes } from "react-router-dom";

// function App() {
//   const [learnIndicator,setLearnIndicator] = useState(false);
//   return (
//     <React.Fragment>
//       <Dashboard
//         changehandler={() => {
//           this.setState({ learnIndicator: !this.state.learnIndicator });
//         }}
//       />
//       <h1 className="text-center mt-2">Welcome to Sudoko</h1>
//       <Route path="/" exact component={GameLayout} />
//       {this.state.learnIndicator ? <Rules /> : null}
//     </React.Fragment>
//   );
// }

class App extends Component {
  state = {
    learnIndicator: false,
  };

  componentDidMount() {
    console.log("somthing");
    if (!this.props.dataFetched) {
      this.props.fetchGame();
    }
  }
  render() {
    return (
      <React.Fragment>
        <Dashboard
          changehandler={() => {
            this.setState({ learnIndicator: !this.state.learnIndicator });
          }}
        />
        <h1 className="text-center mt-2">Welcome to Sudoko</h1>
        <GameLayout />
        {/* <Routes>
          <Route path="/" exact component={GameLayout} />
        </Routes> */}
        {this.state.learnIndicator ? <Rules /> : null}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataFetched: state.dataFetched,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGame: () => dispatch(actionCreators.fetchGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
