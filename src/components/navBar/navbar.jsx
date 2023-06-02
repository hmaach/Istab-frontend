import React from "react";
import "./navbar.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { HiDocumentDuplicate } from "react-icons/hi"
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
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
        <Logo />
      </div>
      <div id="nav-up">
        <Logo2 />
        <NavLink to="/accueil" activeclassname="active" id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title" className="bold">Accueil</p>
        </NavLink>
        <NavLink to="/calendrier" activeclassname="active" id="row">
          <FaCalendarAlt id="home-icon" className="home-icon1" />
          <p id="nav-title" className="bold">Calendrier</p>
        </NavLink>
        <NavLink to="/stagiaires" activeclassname="active" id="row">
          <IoIosPeople id="home-icon" />
          <p id="nav-title" className="bold">Stagiaires</p>
        </NavLink>
        <NavLink to="/archives" activeclassname="active" id="row">
          <HiDocumentDuplicate id="home-icon" />
          <p id="nav-title" className="bold">Archives</p>
        </NavLink>
        <NavLink to="/profile" activeclassname="active" id="row">
          <CgProfile id="home-icon" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </NavLink>
      </div>
      <User />
    </div>
  );
};

export default NavBar;