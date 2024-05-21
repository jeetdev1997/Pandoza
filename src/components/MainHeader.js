import React from "react";
import "../styles/comp/Mainheader.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";

function MainHeader(props) {
  return (
    <>

   
    
    <div className="main-header">
      <div className="header-left">
        <h2 className="title heading">{props.title}</h2>
       <div className="bread">
       {props.link1 && (<span> <Link to={props.link1}>{props.link1_text}</Link>  </span>)}
        {props.link2 && (<span> <span className="arrow" >	&gt;</span> <Link to={props.link2}>{props.link2_text}</Link>  </span>)}
        {props.link3 && (<span> <span className="arrow" >	&gt;</span> <Link to={props.link3}>{props.link3_text}</Link>  </span>)}
        {props.link4 && (<span> <span className="arrow" >	&gt;</span><Link to={props.link4}>{props.link4_text}</Link>  </span>)}
        
       </div>
        </div>
      <div className="header-right">
        <div className="search">
          <span className="icon">
            <IoSearch />
          </span>
          <input type="text" placeholder="Search Pateints/Doctors" />
        </div>

        <button className="btn btn-sec ">
          <div className="icon">
            <BiPhoneCall />
          </div>
          Call for assistance
        </button>

        <button className="btn btn-sec-r">
          <div className="icon">
            <IoSettingsOutline />
          </div>
        </button>

        <button className="btn btn-sec-r">
          <div className="icon">
            <GrNotification />
          </div>
        </button>
      </div>
    </div>
    <div className="dummy-header">
      
    </div>
    </>
  );
}

export default MainHeader;
