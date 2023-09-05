import React from "react";
import ExBaseboard from "./Exbaseboard";

const RuleOne = () => {
  return (
    <div className="row">
      <div className="col-sm-4  ">
        <p className="text-left">
          Here the number <strong>3</strong> should only be present once in this
          cell
        </p>
        <div
          style={{
            backgroundColor: "lightblue",
            margin: "2px",
            padding: "1px",
            width: "80px",
            height: "80px",
          }}
        >
          <ExBaseboard
            targetbox={1}
            identifier={[3, 0, 0, 0, 0, 0, 0, 0, 0]}
            validityArray={[
              true,
              true,
              true,
              true,
              true,
              true,
              true,
              true,
              true,
            ]}
          />
        </div>
      </div>
      <div className="col-sm-4 ">
        <p>
          The number <strong>3</strong> should not be repeated in the red marked
          cell
        </p>
        <div
          style={{
            backgroundColor: "lightblue",
            margin: "2px",
            padding: "1px",
            width: "80px",
            height: "80px",
          }}
        >
          <ExBaseboard
            targetbox={1}
            identifier={[3, 0, 0, 0, 0, 0, 0, 0, 0]}
            validityArray={[
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ]}
          />
        </div>
      </div>
      <div className="col-sm-4 ">
        <p>The 3x3 cell should be filled with values 1-9, like below</p>
        <div
          style={{
            backgroundColor: "lightblue",
            margin: "0px 1px",
            padding: "1px",
            width: "80px",
            height: "80px",
          }}
        >
          <ExBaseboard
            targetbox={1}
            identifier={[3, 9, 2, 1, 4, 5, 8, 6, 7]}
            validityArray={[
              true,
              true,
              true,
              true,
              true,
              true,
              true,
              true,
              true,
            ]}
          />
        </div>
      </div>

      {/* <div className="col-sm-3 offset-1 mt-3 mr-2 ">
                <p>The values can be filled such as this</p>
            </div>
            <div className="col-sm-1 mt-3 mr-2 ">
                <div style={{ backgroundColor: "lightblue", margin: '2px', padding: '1px', width: '105px', height: '105px' }} >
                    <ExBaseboard
                        targetbox={1}
                        identifier={[3, 9, 1, 2, 4, 6, 5, 7, 8]}
                        validityArray={Array(9).fill(true)}
                    />
                </div>
            </div> */}
    </div>
  );
};

export default RuleOne;
