import React, { useState } from 'react'


const Temp = () => {
    const [toogle, setToogle] = useState("ON")
    return (
        <>
            <h1 className='text-xl font-mono font-medium mt-9 bg-blue-600 text-white '>Temp</h1>
            <div className='flex my-3 justify-center '>
                <h1 className='text-xl mx-3 w-8 font-medium'>{toogle}</h1>
                <button onClick={() => {
                    if (toogle === "ON") {
                        setToogle("OFF")
                    }
                    else {
                        setToogle("ON")
                    }
                }} className='btn-bold'>{toogle}</button>
            </div>

        </>
    )
}

export default Temp