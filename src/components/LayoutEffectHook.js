// useLayoutEffect
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const LayoutEffectHook = () => {
    
    const inputRef = useRef("")
    const [text, setText] = useState("Hello")


    useEffect(() => {
        // console.log("useEffect");
        return () => {
            console.log("effect");
        }
    }, [])

    useLayoutEffect(() => {
        // console.log("useLayoutEffect");
        return () => {
            console.log("layout");
        }
    }, [])

    const onChange=(e)=>{
       setText(e.target.value)
    }

    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>LayoutEffect Hook</h1>
            <div className="container">
                <h1 className='text-xl font-medium'>Hello na public!</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    inputRef.current.value = "";
                    }} className="flex justify-center gap-3 py-3">
                    <input onChange={onChange} value={text} className="placeholder:italic placeholder:text-slate-400 block bg-white border-2 border-slate-300 rounded-md py-1 px-3 shadow-sm  focus:outline-none focus:border-blue-600 focus:ring-blue-600 focus:ring-1 text-lg" placeholder="Write something" type="text" ref={inputRef} />
                </form>
            </div>
        </>
    )
}

export default LayoutEffectHook