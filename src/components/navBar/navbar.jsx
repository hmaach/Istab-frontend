import React from "react";
import "./navbar.css";
import { FaTwitter, FaCalendarAlt } from "react-icons/fa";
import {
  BiHomeCircle,
  BiHash,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { HiDocumentDuplicate } from "react-icons/hi"
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "./Logo";
import User from "./User";
import Logo2 from "./Logo2";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }
  return (
    <div id="container-nav">
        <div className="logo_nav">
        <Logo/>
        </div>
      <div id="nav-up">
        <Logo2/>
        <NavLink  to="/accueil" activeclassname="active" id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title" className="bold">Accueil</p>
        </NavLink>

        <NavLink to="/calendrier" activeclassname="active" id="row">
          <FaCalendarAlt id="home-icon" className="home-icon1" />
          <p id="nav-title" className="bold">Calendrier</p>
        </NavLink>

        <NavLink  to="/stagiaires" activeclassname="active" id="row">
          <IoIosPeople id="home-icon" />
          <p id="nav-title" className="bold">Stagiaires</p>
        </NavLink>

        <NavLink to="/documents" activeclassname="active" id="row">
          <HiDocumentDuplicate id="home-icon" />
          <p id="nav-title" className="bold">Documents</p>
        </NavLink>

        <NavLink to="/profile" activeclassname="active" id="row">
          <CgProfile id="home-icon" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </NavLink>

      </div>
      <User/>
    </div>
  );
};

export default NavBar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';



// function Navbar() {
//   return (
//     <div id="container-nav">
//       <div id="nav-up">
//         <span id="twitter-box">
//         </span>
//         <ul id="nav-list">
//           <li>
//             <NavLink exact to="/" activeclassname="active">
//               <p id="nav-title">Accueil</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/calendrier" activeclassname="active">
//               <p id="nav-title">Calendrier</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/stagiaires" activeclassname="active">
//               <p id="nav-title">Stagiaires</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/documents" activeclassname="active">
//               <p id="nav-title">Documents</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" activeclassname="active">
//               <p id="nav-title">Profil</p>
//             </NavLink>
//           </li>
//         </ul>
//         <ul id="nav-list">
//           <li>
//             <NavLink to="/lists" activeclassname="active">
//               <p id="nav-title">Listes</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" activeclassname="active">
//               <p className="bold" id="nav-title">
//                 Profil
//               </p>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
