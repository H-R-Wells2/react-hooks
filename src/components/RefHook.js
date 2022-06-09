// useRef
import React, { useRef } from 'react'


const RefHook = () => {


    const inputRef = useRef(null);

    const onClick = (e) => {
        e.preventDefault()
        if (inputRef.current.value === "clear") {
            console.clear();
        }
        else {
            console.log(inputRef.current.value);
        }
        inputRef.current.value = ""
    }



    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>Ref Hook</h1>
            <form className="flex justify-center gap-3 py-3">
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white border-2 border-slate-300 rounded-md py-1 px-3 shadow-sm  focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 text-lg" placeholder="Write something" type="text" ref={inputRef} />
                <button onClick={onClick} className="btn" >Click</button>
            </form>
        </>
    )
}

export default RefHook