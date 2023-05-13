import React, { useEffect, useState } from "react";
import "./right.css";
import AccountMight from "./accountMight/accountMight";
import { Link } from "react-router-dom";
import NotificationSide from "./notifications/NotificationSide";
import axios from "axios";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const Right = () => {
  const [notifs, setNotifs] = useState([])
  const [stagiaires, setStagiaires] = useState([])
  const [isLoadingNotif, setIsLoadingNotif] = useState(true);
  const [isLoadingStag, setIsLoadingStag] = useState(true);
  const [errNotif, setErrNotif] = useState();
  const [errStag, setErrStag] = useState();

  const fetchNotifs = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/notifs`);
      const data = response.data;
      setNotifs(data.notifs);
      setIsLoadingNotif(false);
    } catch (error) {
      console.log(error);
      setErrNotif(error)
      setIsLoadingNotif(false);
    }
  };

  const fetchRandomStagiaires = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/fourstagiaires`);
      const data = response.data;
      setStagiaires(data.stagiaires);
      setIsLoadingStag(false);
    } catch (error) {
      console.log(error);
      setErrStag(error)
      setIsLoadingStag(false);
    }
  };

  useEffect(() => {
    fetchNotifs();
    fetchRandomStagiaires();
    const interval = setInterval(() => {
      fetchNotifs();
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div id="container-right">
      {notifs &&
        <div id="might-like-box">
          <h2 id="title-might">Notifications</h2>
          {isLoadingNotif
            ? (<LoadingSpinner/>)
            : (
              notifs.map(notif => {
                return (
                  <NotificationSide
                  key={notif.id}
                    notif={notif} />
                )
              }
              )
            )
          }
          <div to='/stagiaires' id="show-more-box">
            <Link id="show-more-btn">Show more</Link>
          </div>
        </div>
      }
      {stagiaires &&
        <div id="might-like-box">
          <h2 id="title-might">Découvrez les stagiaires</h2>
          {isLoadingNotif
            ? (<LoadingSpinner/>)
            : (
              stagiaires.map(stagiaire => {
                return (
                  <AccountMight
                    key={stagiaire.id}
                    stagiaire={stagiaire}
                  />
                )
              }
              )
            )
          }
          <div to='/stagiaires' id="show-more-box">
            <Link id="show-more-btn">Show more</Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Right;
