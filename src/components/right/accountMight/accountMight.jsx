import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountMight = (props) => {
  return (
    <Link to='/profile' id="box-account-might">
      <div id="container-might">
        <span id="user-box">
          <img
            id="person"
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
          />
          <span>
            {/* <p id="name"><span className='first-letter'>{prenom}</span> <span className='first-letter'>{nom}</span></p> */}
            <p id="name"><span className='first-letter'>hamza</span> <span className='first-letter'>maach</span></p>
            <p id="id">DEVOWFS202</p>
          </span>
        </span>
      </div>
    </Link>
  );
};

export default AccountMight;
