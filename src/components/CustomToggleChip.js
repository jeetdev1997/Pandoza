import React, { useState } from 'react'
import "../styles/comp/customtogglechip.scss"
import { FaCheck } from "react-icons/fa6";
const CustomToggleChip = ({label}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={toggle ? "custom-toggle-chip" : "custom-toggle-chip active"} onClick={() => setToggle(!toggle)}>
            <FaCheck className='text-[var(--y1)] check' /> <p>{label}</p>
        </div>
    )
}

export default CustomToggleChip