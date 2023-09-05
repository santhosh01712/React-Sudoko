import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-inverse"
        style={{
          background:
            "linear-gradient(to right,lightblue,  lightgreen , lightpink)",
        }}
      >
        <div className="container-fluid ">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <strong style={{ color: "black" }}>React Sudoko</strong>
            </a>
          </div>
          <ul className="nav navbar-nav ">
            <button
              className="btn mr-2"
              style={{
                background:
                  "linear-gradient(to right, lightblue,lightgreen, lightblue)",
                borderRadius: "none",
              }}
              onClick={this.props.changehandler}
            >
              <li>
                <strong>Learn Sudoko</strong>
              </li>
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Dashboard;
