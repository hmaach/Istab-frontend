import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountMight = (props) => {
  const stagiaire = props.stagiaire 

  return (
    <Link to={`/profile/${stagiaire.id}`} id="box-account-might" key={stagiaire.id}>

      <div id="container-might">
        <span id="user-boxh" style={{display:'flex'}}>
          <img
            id="personr"
            src="ayadi.jpeg"
            alt="profile"
          />
          <span>
            {/* <p id="name"><span className='first-letter'>{prenom}</span> <span className='first-letter'>{nom}</span></p> */}
            <p id="namer"><span className='first-letter'>{stagiaire.prenom}</span> <span className='first-letter'>{stagiaire.nom}</span></p>
            <p id="idr" className='first-letter'>{stagiaire.filiere}</p>
          </span>
        </span>
      </div>
    </Link>
  );
};

export default AccountMight;
