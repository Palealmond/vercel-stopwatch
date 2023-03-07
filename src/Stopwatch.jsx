import React, { Component, useState } from 'react';
import "./Stopwatch.css"

function Stopwatch({ initial = 0 }) {

  const [counter, setCounter] = useState(initial)
  const [intervalID, setIntervalID] = useState()


  function handleStart() {
    if (!intervalID) {
      const id = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 1000)
      setIntervalID(id)
    }
  }

  function handlePause() {
    clearInterval(intervalID)
    setIntervalID(undefined)
  }

  function handleReset() {
    handlePause()
    setCounter(0)
  }


  return (
    <div className="stopwatch">
      <h1>{counter}</h1>
      <div className="controls" style={{ display: "grid", justifyContent: "center" }}>
        <button onClick={handleReset} className="box">Reset</button>
        <button onClick={handleStart} className="box">Start</button>
        <button onClick={handlePause} className="box">Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch;
