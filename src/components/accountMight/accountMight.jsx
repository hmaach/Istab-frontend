import React, { useState } from "react";

import { GoVerified } from "react-icons/go";

const AccountMight = (props) => {
  const [follow, setFollow] = useState(false);
  const [verified, setVerified] = useState(true);

  const followHandler = () => {
    if (follow === false) {
      setFollow(true);
    } else if (follow === true) {
      setFollow(false);
    }
  };

  return (
    <div id="box-account-might">
      <div id="container-might">
        <div id="row_">
          <img id="profile-might" src={props.src} alt="profile" />
        </div>
        <div id="name-id-might">
          <div id="verified-box">
            <p id="name-might"> {props.name} </p>
            {verified === props.verified && <GoVerified id="verified" /> }
          </div>
          <p id="id-might"> {props.id} </p>
        </div>
      </div>

      <button
        onClick={followHandler}
        id={follow === false ? "follow-might" : "following-might"}
      >
        {follow === true ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default AccountMight;
