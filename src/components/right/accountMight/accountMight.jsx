import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountMight = (props) => {
  const stagiaire = props.stagiaire 

  return (
    <Link to='/profile' id="box-account-might" key={stagiaire.id}>
      <div id="container-might">
        <span id="user-box">
          <img
            id="person"
            src="ayadi.jpeg"
            alt="profile"
          />
          <span>
            {/* <p id="name"><span className='first-letter'>{prenom}</span> <span className='first-letter'>{nom}</span></p> */}
            <p id="name"><span className='first-letter'>{stagiaire.prenom}</span> <span className='first-letter'>{stagiaire.nom}</span></p>
            <p id="id" className='first-letter'>{stagiaire.filiere}</p>
          </span>
        </span>
      </div>
    </Link>
  );
};

export default AccountMight;
