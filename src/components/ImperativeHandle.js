// useImperativeHandle
import React, { useRef } from 'react'
import Button from './Button'

const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>Imperative handle Hook</h1>
      <div className='flex-col'>
        <button onClick={()=>{
          buttonRef.current.alterToggle()
        }} className="btn my-3">Button form parent</button>
        <Button ref={buttonRef} />
      </div>
      <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>-_-</h1>
    </>
  )
}

export default ImperativeHandle