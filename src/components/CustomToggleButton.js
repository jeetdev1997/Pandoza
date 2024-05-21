import React, { useState } from 'react'
import "../styles/comp/togglebutton.scss"
const CustomToggleButton = ({ label }) => {
  const [toggle, setToggle] = useState(true)

  return (
    <div className="toggle-parent">
      <div className={toggle ? 'external-div-toggle' : 'external-div-toggle active'} onClick={() => setToggle(!toggle)}>
        <div className="internal-div-toggle">

        </div>
      </div>
      <label>{label} </label>
 
    </div>
  )
}

export default CustomToggleButton