// useEffect hook 
// we are using api calls for better understanding
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const EffectHook = () => {

    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {

            axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response => {
                    setData(response.data[count].email)
                })
        
    }, [count])




    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>Effect Hook</h1>
            <div className="container flex-col justify-center">
                <h1 className="text-xl">{data}</h1>
                <h1 className="text-xl">{count}</h1>
                <div className="flex justify-center gap-3">

                    <button onClick={() => {
                        setCount(0)
                    }} className='btn'>Reset</button>

                    <button onClick={() => {
                        setCount(count + 1)
                    }} className="btn">Next</button>
                </div>
            </div>
        </>
    )
}

export default EffectHook