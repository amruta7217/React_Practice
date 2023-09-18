import React from 'react'
import { useCountContext } from "./Context";

function DisplayCount() {
    const { count } = useCountContext()
  return (
    <div>
      <p style={{textAlign:"center"}}>{count}</p>
    </div>
  )
}

export default DisplayCount
