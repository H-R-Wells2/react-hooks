import React, { useState } from 'react'

const StateHook = () => {
    const [first, setfirst] = useState(0);

    const increase =()=>{
        setfirst(first + 1);
    }
    
    const decrease =()=>{
        setfirst(first - 1);
    }



    const [input, setInput] = useState("To be change!")

    const onChange=(event)=>{
        setInput(event.target.value)
    }

  return (
      <>
    <div className='flex mt-5 justify-center'>
        <button onClick={decrease} className='bg-blue-600 px-4 rounded-lg text-white font-bold'>-</button>
        <h1 className='text-2xl mx-5 w-9'>{first}</h1>
        <button onClick={increase} className='bg-blue-600 px-4 rounded-lg text-white font-bold'>+</button>

    </div>
    <div className='flex mt-5 justify-center'>
        <input onChange={onChange} class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-1 px-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 text-lg" placeholder="Write something" type="text" />
        <h1 className='text-2xl mx-5'>{input}</h1>
    </div>
    </>
  )
}

export default StateHook