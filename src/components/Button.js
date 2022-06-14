// Button used in imperativeHandle Hook
import React, { useState, forwardRef, useImperativeHandle } from 'react'


const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)
  useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle(!toggle)
      }
    }));


  return (
    <div className='flex-col'>
      <button onClick={()=>{setToggle(!toggle)}} className='btn'>Button from child</button>
      <div>
        {toggle && <span>Toggle</span>}
      </div>
    </div>
  )
});

export default Button