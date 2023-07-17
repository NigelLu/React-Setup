/** @format */

import React, { useEffect, useState } from "react";

const COUNT_DOWN_SECS = 5;

function App() {
  // #region ViewModel Logic
  const [counter, setCounter] = useState(COUNT_DOWN_SECS);

  useEffect(() => {
    const reduceCounter = setInterval(
      () => setCounter((currentCounter) => currentCounter - 1),
      1000,
    );
    setTimeout(() => clearInterval(reduceCounter), 1000 * COUNT_DOWN_SECS);
  }, []);
  // #endregion ViewModel Logic

  // #region View
  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Welcome to the demo for ReactJS</h1>
      <h2>{counter ? <>We are counting down:&nbsp;</> : <>Counted down completed!!!</>}</h2>
      <div style={{ fontSize: "2rem" }}>
        <span style={{ color: counter ? "orange" : "red" }}>{counter}</span>
        <span>&nbsp;second{counter > 1 ? "s" : ""}</span>
      </div>
    </div>
  );
  // #endregion View
}

export default App;
