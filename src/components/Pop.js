import React from "react";
import { IoClose } from "react-icons/io5";
import "../styles/comp/pop.scss"

function Pop(props) {
  return (
    <div className="pop">
      <div className="card-box" data-aos="fade-up" data-aos-duration="1000">
        <div className="close" onClick={props.close}>
          <IoClose />
        </div>

        <div className="header">
          <h2 className="heading">{props.title}</h2>
        </div>

        <div className="body">
          {props.children}
        </div>

        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Pop;