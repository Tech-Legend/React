import React from 'react'
import { useState } from 'react'

function State(props) {
     const [q,setq]=useState(0)
    const add=()=>{
        setq(q+1);
    }
    const sub=()=>{
setq(q-1);
    }

  return (
    <div>
      <p>No.of Lens: {q}</p>
      <button onClick={add}>+</button> &nbsp; &nbsp;
      <button onClick={sub}>-</button>
    </div>
  )
}

export default State
