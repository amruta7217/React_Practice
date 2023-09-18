import React from 'react'
import { useCountContext } from "./Context";

function Button() {
    const { setCounter } = useCountContext()

  return (
    <div style={{justifyContent:"center"}}>
        <button 
            className='increment-button' 
            onClick={() => setCounter("increment")}
        >
            Increment
        </button>

        <button 
            className='decrement-button' 
            onClick={() => setCounter("decrement")}
        >
            Decrement
        </button>
    </div>
  )
}

export default Button
