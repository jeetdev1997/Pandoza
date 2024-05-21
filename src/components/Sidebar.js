// import React, { useEffect, useState } from "react";
// import "../styles/comp/sidebar.scss";
// import { IoChevronBack } from "react-icons/io5";
// import logo from "../assets/login/logo.png";
// import { LiaUserTieSolid } from "react-icons/lia";
// import { level1, level2a, level3a } from "../static/Navdata";
// function Sidebar() {
//   const [controller, setController] = useState(false)
//   console.log(level2a)
//   return (
//     <div className="sidebar-parent ">
//       <div className="sidebar-container open3">
//         <div className="sidebar open">
//           <div className="sidebar-header">
//             <img src={logo} alt="" className="logo" />

//             <div className="close icon">
//               <IoChevronBack />
//             </div>
//           </div>
//           <div className="nav-body">
//             <div className="col1 col">
//               <div className="nav-list">

//                 {
//                   level1.map((data, index) => <div className="nav-item " key={index} onMouseEnter={()=>setController(true)}  onMouseLeave={()=>setController(false)}>
//                     <div className="link-contains">
//                       <div className="icon">
//                         {data.icon}
//                       </div>
//                       <span className="text-white">{data.text}</span>
//                     </div>
//                   </div>)
//                 }

//               </div>
//             </div>
//             {
//               controller && level2a.length > 0 &&
//               <div className="col2 col"  onMouseEnter={()=>setController(true)} onMouseLeave={()=>setController(false)}>
//                 <div className="nav-list">
//                   {
//                     level2a.map((data, index) => <div className="nav-item " key={index}>
//                       <div className="link-contains">
//                         <div className="icon">
//                           {data.icon}
//                         </div>
//                         <span className="text-white">{data.text}</span>
//                       </div>
//                     </div>)
//                   }
//                 </div>
//               </div>


//             }



//             {
//               level3a.length > 0 &&
//               <div className="col3 col">
//                 <div className="nav-list">
//                   {
//                     level3a.map((data, index) => <div className="nav-item " key={index}>
//                       <div className="link-contains">
//                         <div className="icon">
//                           {data.icon}
//                         </div>
//                         <span className="text-white">{data.text}</span>
//                       </div>
//                     </div>)
//                   }
//                 </div>


//               </div>
//             }

//           </div>
//         </div>
//       </div>

//       <div className="sidebar-bg"></div>
//     </div>
//   );
// }

// export default Sidebar;
