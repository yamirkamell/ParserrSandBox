import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [change, setChange] = useState<boolean>(false);

  const handleOperation = (resultNum: number) => {
    setChange(false);
    setResult(resultNum);
  };

  useEffect(() => {
    setChange(true);
  }, [numberOne, numberTwo]);

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={numberOne}
          onChange={(event: any) => {
            setNumberOne(parseInt(event.target.value));
          }}
        />
        <input
          type="number"
          placeholder="0"
          value={numberTwo}
          onChange={(event: any) => {
            setNumberTwo(parseInt(event.target.value));
          }}
        />
      </div>

      <button
        className="button-component"
        onClick={() => {
          handleOperation(numberOne + numberTwo);
        }}
      >
        +
      </button>
      <button
        className="button-component"
        onClick={() => {
          handleOperation(numberOne - numberTwo);
        }}
      >
        -
      </button>
      <button
        className="button-component"
        onClick={() => {
          handleOperation(numberOne * numberTwo);
        }}
      >
        *
      </button>
      <button
        className="button-component"
        onClick={() => {
          handleOperation(numberOne / numberTwo);
        }}
      >
        /
      </button>
      {!change && (
        <h2 className="result-component">{`Your result is: ${result}`}</h2>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
