import React from 'react'
import { hourglass } from 'ldrs'
hourglass.register()
const Loader = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-[#000000b4] fixed left-0 top-0 z-[10000]' style={{backdropFilter:"blur(5px)"}}>
            <l-hourglass
                size="100"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="#FFB800"
            ></l-hourglass>
        </div>
    )
}

export default Loader