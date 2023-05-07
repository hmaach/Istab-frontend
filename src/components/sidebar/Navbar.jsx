import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faUserGraduate, faFileAlt, faAddressCard, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function App() {
  return (
    <div>
      <Navbar className="sidebar" fixed="left">
        <Nav>
          <NavItem href="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Accueil</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faCalendar} />
            <span>Calendrier</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Stagiaires</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Documents</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faAddressCard} />
            <span>Mon CV</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faPlus} />
            <span>Plus</span>
          </NavItem>
        </Nav>
      </Navbar>
      {/* Rest of your app content goes here */}
    </div>
  );
}

export default App;
