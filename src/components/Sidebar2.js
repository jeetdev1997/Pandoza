import React, { useState } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import "../styles/comp/sidebar2.scss";
import { Link } from "react-router-dom";
import logo from "../assets/login/logo.png";
import logo2 from "../assets/login/smalllogo.png";
import { level } from "../static/Navdata";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { IoReceiptOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";




function Sidebar2() {
  const [navstate, setnavstate] = useState(false);

  const [l2, setl2] = useState(false);
  const [l3, setl3] = useState(false);

  return (
    <>
      <div
        className="smallsidebar"
        // onMouseOver={() => setnavstate(true)}
        onClick={() => setnavstate(true)}

      >
        <div className="sidebar">

          <div className="header">
            <img src={logo2} alt="" />


          </div>


          <div className="dummyicons">

            <div className="dum-icon">
              <MdOutlineDashboard />
            </div>
            <div className="dum-icon">
              < IoCreateOutline />
            </div>
            <div className="dum-icon">
              < FiUser />
            </div>
            <div className="dum-icon">
              < GrUserManager />
            </div>
            <div className="dum-icon">
              < LuUsers />
            </div>
            <div className="dum-icon">
              < BiTask />
            </div>
            <div className="dum-icon">
              < AiOutlineControl />
            </div>
            <div className="dum-icon">
              < IoReceiptOutline />
            </div>
            <div className="dum-icon">
              < IoDocumentTextOutline />
            </div>

          </div>





        </div>
      </div>

      {navstate && (
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <div className={l2 ? "sidebar-main exp" : "sidebar-main"}>
              <div className="nav-header">
                <img src={logo} alt="" />
              </div>

              <nav>
                {level.map((data, index) => (
                  <Link
                    to={data.link}
                    key={index}
                    className="links-container"
                    onClick={() => { if (!data.children) { setnavstate(false) } }}
                    onMouseOver={() => {
                      if (data.children) {
                        setl2(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (data.children) {
                        setl2(false);
                      }
                    }}
                  >
                    <div className={data.children && "line"}></div>
                    <div className="inner-link">
                      <div className="nav-icon">{data.icon}</div>
                      <p>{data.text}</p>
                      {data.children && (
                        <div className="nav-icon more">
                          {" "}
                          <IoIosArrowForward />{" "}
                        </div>
                      )}
                    </div>
                    {data.children && (
                      <div className={l3 ? "level2link exp" : "level2link"}>
                        <div className="level2link-box">
                          {data.children.map((childData, index) => (
                            <Link
                              to={childData.link}
                              key={index}
                              onClick={() => { if (!childData.child) { setnavstate(false) } }}
                              className="links-container2"
                              onMouseOver={() => {
                                if (childData.child) {
                                  setl3(true);
                                }
                              }}
                              onMouseLeave={() => {
                                if (childData.child) {
                                  setl3(false);
                                }
                              }}
                            >
                              <div
                                className={
                                  childData.child ? "line2" : "line2-h"
                                }
                              ></div>
                              <div className="inner-link2">
                                <div className="nav-icon2">
                                  {childData.icon}
                                </div>
                                <p>{childData.text}</p>
                                {childData.child && (
                                  <div className="nav-icon2 more">
                                    {" "}
                                    <IoIosArrowForward />{" "}
                                  </div>
                                )}
                              </div>
                              {childData.child && (
                                <div className="level3link">
                                  <div className="level2link-box">
                                    {childData.child.map((grandChildData, index) => (
                                      <Link
                                        to={grandChildData.link}
                                        key={index}
                                        onClick={() => setnavstate(false)}
                                        className="links-container3"
                                      >
                                        <div className="line3"></div>
                                        <div className="inner-link3">
                                          <div className="nav-icon3">
                                            {grandChildData.icon}
                                          </div>
                                          <p>{grandChildData.text}</p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </nav>

              <div className="bottom-links">
                <Link to="#" className="links-container4">
                  <div className="line4"></div>
                  <div className="inner-link4">
                    <div className="nav-icon4"> <IoSettingsOutline /> </div>
                    <p>Setting</p>
                  </div>
                </Link>
                <Link to="#" className="links-container4">
                  <div className="line4"></div>
                  <div className="inner-link4">
                    <div className="nav-icon4"> <LuLogOut /></div>
                    <p>Logout</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="closearea"
            // onMouseOver={() => setnavstate(false)}
            onClick={() => setnavstate(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default Sidebar2;
