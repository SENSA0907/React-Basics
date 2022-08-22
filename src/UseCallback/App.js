import React, { useState, useCallback, useMemo, useEffect } from "react";
import UseCallBackDemo from "./UseCallBackDemo";
import UseDeferedValue from "./UseDeferedValue";

/* const App = () => {
  const [number, setNumber] = useState(0);
  const [calcValue, setCalcValue] = useState(0);
  const [isDark, setDark] = useState(false);
  // getData function is related to number state
  // getData need to be refrenced or re assginged only when number changes
  // but due to state or prop update in this component, getData will be reassigned again ana again
  
  // useCallback hook
  // useCallback gets first parameter as a function and second parameter as dependency
  // also useCallback assings first parameter function
  const getData = useCallback(() => {
    return [number + 1, number + 2, number + 3]
  }, [number]);

  const calculationLogic = () => {
    let data = 0;
    for (let i=0; i < 100000000; i++) {
      // const data = number * 30;
      // data = number * 10;
    }
    data = number * 10;
    return data;
  }

  const slowFunction = useMemo(calculationLogic, [number])

  // the syntax of useCallback and useMemo is same
  // const memValue = useMemo(cacculateValue, [number])
  const onNumberChange = (event) => {
    if (event.type === 'change') {
        setNumber(event.target.value)
    }
  }
  return (
    <div>
      <div>{`Calculated value is ${slowFunction}`}</div>
      <div>
        <input
          type="number"
          // min={0}
          max={30}
          placeholder="Type number between 1 to 30"
          value={number}
          onChange={onNumberChange}
        ></input>
        <button onClick={()=>{setDark(!isDark)}}>Toggle Theme</button>
      </div>
      <div>
        <UseCallBackDemo isDark={isDark} getData={getData}/>
      </div>
    </div>
  );
}; */

const App = () => {
  return <UseDeferedValue></UseDeferedValue>
}

export default App;
