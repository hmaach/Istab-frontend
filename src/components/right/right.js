import React from "react";
import "./right.css";
import AccountMight from "./accountMight/accountMight";
import { Link } from "react-router-dom";
import NotificationSide from "./notification2/NotificationSide";

const Right = () => {
  return (
    <div id="container-right">
      <div id="might-like-box">
        <h2 id="title-might">Notifications</h2>
        <NotificationSide />
        <NotificationSide />
        <NotificationSide />
        <div to='/stagiaires' id="show-more-box">
          <Link id="show-more-btn">Show more</Link>
        </div>
      </div>
      <div id="might-like-box">
        <h2 id="title-might">Découvrez les stagiaires</h2>
        <AccountMight />
        <AccountMight />
        <AccountMight />
        <div to='/stagiaires' id="show-more-box">
          <Link id="show-more-btn">Show more</Link>
        </div>
      </div>
    </div>
  );
};

export default Right;
