import React, { useState, useEffect } from 'react';
import './useCallback.style.css';

const UseCallBackDemo = ({getData, isDark}) => {
    const [item, setItem] = useState([]);
    useEffect(()=>{
      console.log("Triggering useEffect attached to getData")
        const data = getData();
        // console.log(data)
        setItem(data);
    }, [getData])
  return (
    <div className={`container ${isDark ? 'dark-container' : 'light-container'} `}>
        {item.length > 0 && item.map((i, index)=>{
            return <div key={index}>{i}</div>
        })}
    </div>
  )
}

export default UseCallBackDemo