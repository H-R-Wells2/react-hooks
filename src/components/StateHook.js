// useState hook
import React, { useState } from 'react'

const StateHook = () => {


    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }



    const [input, setInput] = useState("To be change!")

    const onChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-3 bg-blue-600 text-white '>State Hook</h1>
            <div className='flex mt-5 justify-center'>
                <button onClick={decrease} className='btn-bold'>-</button>
                <h1 className='text-2xl mx-5 w-9'>{count}</h1>
                <button onClick={increase} className='btn-bold'>+</button>

            </div>
            <div className='flex mt-5 justify-center'>
                <input onChange={onChange} className="placeholder:italic placeholder:text-slate-400 block bg-white border-2 border-slate-300 rounded-md py-1 px-3 shadow-sm  focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 text-lg" placeholder="Write something" type="text" />
                <h1 className='text-2xl mx-5'>{input}</h1>
            </div>
        </>
    )
}

export default StateHook