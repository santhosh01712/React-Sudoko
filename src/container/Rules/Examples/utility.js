import Answers from "./answers.json";

function findmyarray(i) {
  let rowArray = [];
  let columnArray = [];
  if (i <= 2) {
    rowArray = [0, 1, 2];
  } else if (i <= 5 && i >= 3) {
    rowArray = [3, 4, 5];
  } else if (i <= 8 && i >= 6) {
    rowArray = [6, 7, 8];
  }
  if (i === 0 || i === 3 || i === 6) {
    columnArray = [0, 3, 6];
  } else if (i === 1 || i === 4 || i === 7) {
    columnArray = [1, 4, 7];
  } else if (i === 2 || i === 5 || i === 8) {
    columnArray = [2, 5, 8];
  }
  return [rowArray, columnArray];
}
export function validityArray(m, n) {
  let mynewNamedArray = Array(9).fill(Array(9).fill(true));
  let [arrayTrackerRow, arrayTrackerCol] = findmyarray(m);
  let [elementTrackerRow, elementTrackerCol] = findmyarray(n);
  for (let array of [...arrayTrackerRow]) {
    let arrayCopy = [...mynewNamedArray[array]];
    for (let element of [...elementTrackerRow]) {
      arrayCopy[element] = false;
      if (array === m && element === n) {
        arrayCopy[element] = true;
      }
    }
    mynewNamedArray[array] = [...arrayCopy];
  }
  for (let array of arrayTrackerCol) {
    let arrayCopy = [...mynewNamedArray[array]];
    for (let element of elementTrackerCol) {
      arrayCopy[element] = false;
      if (array === m && element === n) {
        arrayCopy[element] = true;
      }
    }
    mynewNamedArray[array] = [...arrayCopy];
  }
  let arrayCopy = [...mynewNamedArray[m]];
  for (let i = 0; i < 9; i++) {
    if (i !== n) {
      arrayCopy[i] = false;
    }
  }
  mynewNamedArray[m] = [...arrayCopy];
  return mynewNamedArray;
}

export function userGuild(m, n, receivedArray, value, answer) {
  let zeroCountAll = 0;
  let zeroCountCell = 0;
  let wrongFound = 0;
  let mynewNamedArray = Array(9).fill(Array(9).fill(true));
  let [arrayTrackerRow, arrayTrackerCol] = findmyarray(m);
  let [elementTrackerRow, elementTrackerCol] = findmyarray(n);
  for (let array of [...arrayTrackerRow]) {
    let arrayCopy = [...mynewNamedArray[array]];
    for (let element of [...elementTrackerRow]) {
      if (receivedArray[array][element] === value) {
        arrayCopy[element] = false;
        wrongFound++;
      }
      if (array === m && element === n) {
        wrongFound--;
        arrayCopy[element] = true;
      }
      if (element !== n && receivedArray[array][element] === 0) {
        zeroCountAll++;
      }
    }
    mynewNamedArray[array] = [...arrayCopy];
  }
  for (let array of arrayTrackerCol) {
    let arrayCopy = [...mynewNamedArray[array]];
    for (let element of elementTrackerCol) {
      if (receivedArray[array][element] === value) {
        arrayCopy[element] = false;
        wrongFound++;
      }
      if (array === m && element === n) {
        arrayCopy[element] = true;
        wrongFound--;
      }
      if (receivedArray[array][element] === 0) {
        zeroCountAll++;
      }
    }
    mynewNamedArray[array] = [...arrayCopy];
  }
  let arrayCopy = [...mynewNamedArray[m]];
  for (let i = 0; i < 9; i++) {
    if (i !== n && receivedArray[m][i] === value) {
      arrayCopy[i] = false;
      wrongFound = true;
    }
    if (i !== n && receivedArray[m][i] === 0) {
      zeroCountCell++;
    }
  }
  let message = null;
  let ansPicker = (Math.random() * 10).toFixed(0);
  let ansPickerThree = ansPicker;
  if (ansPickerThree >= 3) {
    ansPickerThree = Math.floor(ansPickerThree / 3) - 1;
  }

  if (wrongFound > 0) {
    message = (
      <strong className="text-danger">{Answers.wrong[ansPickerThree]}</strong>
    );
  } else {
    if ((zeroCountCell < 5 && zeroCountAll < 5) || zeroCountCell < 2) {
      if (value === answer) {
        message = (
          <strong className="text-success">
            {Answers.correct[ansPickerThree]}
          </strong>
        );
      } else {
        message = (
          <strong className="text-info">
            {Answers.maybeRight[ansPickerThree]}
          </strong>
        );
      }
    } else {
      message = (
        <strong className="text-warning">
          {Answers.maybeWrong[ansPicker]}
        </strong>
      );
    }
  }
  mynewNamedArray[m] = [...arrayCopy];
  return [mynewNamedArray, message];
}
