import React, { useState, useDeferredValue, useEffect } from 'react'

function UseDeferedValue() {
    const [input, setInput] = useState("");
    const [fetchedData, setFetchedData] = useState("");
    const onInputChange = (e) => {
        if (e.type === 'change') {
            setInput(e.target.value)
        }
    }
    const slowFunction = () => {
        for (let i=0; i<1000000000 ; i++) {}
        setFetchedData(`${input} somesoutput`)
    }
    const deferredInput = useDeferredValue(input);

    // tru to run this useEffect by passing input or deferredInput as dependency
    // to understand deferedvalue hook better
    useEffect(slowFunction, [deferredInput]);

    useEffect(()=>{
        console.log(`input is ${input} and defeeedInput is ${deferredInput}`)
    }, [input, deferredInput])
    
  return (
    <div>
        <input type="text" onChange={onInputChange} value={input} placeholder="Search..."></input>
        <div>{`Input is ${input}`}</div>
        <div>{`DeferedInput is ${deferredInput}`}</div>
        <div>{`Output is ${fetchedData}`}</div>
    </div>
  )
}

export default UseDeferedValue