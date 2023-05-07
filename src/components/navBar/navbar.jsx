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

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }
  return (
    <div id="container-nav">
      <div id="nav-up">
        <Logo/>
        <NavLink  to="/accueil" activeClassName="active" id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title" className="bold">Accueil</p>
        </NavLink>

        <NavLink to="/calendrier" activeClassName="active" id="row">
          <FaCalendarAlt id="home-icon" className="home-icon1" />
          <p id="nav-title" className="bold">Calendrier</p>
        </NavLink>

        <NavLink  to="/stagiaires" activeClassName="active" id="row">
          <IoIosPeople id="home-icon" />
          <p id="nav-title" className="bold">Stagiaires</p>
        </NavLink>

        <NavLink to="/documents" activeClassName="active" id="row">
          <HiDocumentDuplicate id="home-icon" />
          <p id="nav-title" className="bold">Documents</p>
        </NavLink>

        <NavLink to="/profile" activeClassName="active" id="row">
          <CgProfile id="home-icon" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </NavLink>

      </div>

      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="person"
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
          />
          <span>
            <p id="name">Issam Harnoufi</p>
            <p id="id">DEVOWFS202</p>
          </span>
        </span>

        <span>
          <CgMoreAlt id="more-bottom" />
        </span>
      </div>
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
//             <NavLink exact to="/" activeClassName="active">
//               <p id="nav-title">Accueil</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/calendrier" activeClassName="active">
//               <p id="nav-title">Calendrier</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/stagiaires" activeClassName="active">
//               <p id="nav-title">Stagiaires</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/documents" activeClassName="active">
//               <p id="nav-title">Documents</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" activeClassName="active">
//               <p id="nav-title">Profil</p>
//             </NavLink>
//           </li>
//         </ul>
//         <ul id="nav-list">
//           <li>
//             <NavLink to="/lists" activeClassName="active">
//               <p id="nav-title">Listes</p>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" activeClassName="active">
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
