import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotificationSide = (props) => {
  return (
    
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <p className="card-subtitle mb-2 text-muted text-start">Evènement · 22 min</p>
        <p className="card-text text-start">
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
         </p>
      
        <p className="card-subtitle mb-2 text-muted text-start">Publier par <a href="#" class="card-link">Hamza MAACH</a> </p> 
      </div>
    </div>
    
  );
};

export default NotificationSide;
