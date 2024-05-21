import React from 'react'
import "../styles/comp/formcard.scss";

const FormCard = ({ children, title, icons, btntext, btntext2, icons2 }) => {
  return (
    <div className="form-card-box">
      <div className="form-card-box-heading">
        <span>{title}</span>
        {btntext && <button className='form-card-btn'> <span>{icons}</span>{btntext}</button>}
        {btntext2 && <button className='form-card-btn'> <span>{icons2}</span>{btntext2}</button>}
      </div>
      <div className="form-card-data">
        {children}
      </div>

      <div className="form-card-box-footer">
        {btntext && <button className='form-card-btn-footer'> <span>{icons}</span>{btntext}</button>}
        {btntext2 && <button className='form-card-btn-footer'> <span>{icons2}</span>{btntext2}</button>}
      </div>
    </div>
  )
}

export default FormCard