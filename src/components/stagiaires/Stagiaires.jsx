import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../features/auth/authSlice';
import GetCookie from '../../cookies/JWT/GetCookie';

const Stagiaires = () => {

  // const [user, setUser] = useState([])
  // const [err, setErr] = useState();
  // const curUser = useSelector(selectCurrentUser)
  // const token = GetCookie('jwt');

  // const fetchUser = async () => {
  //   try {
  //     if (curUser) {
  //       if (!token) {
  //         throw new Error('Authentication token not found in cookies');
  //       }

  //       const headers = { Authorization: `Bearer ${token}` };
  //       const response = await axios.get(`http://127.0.0.1:8000/api/user`, { headers });
  //       const data = response.data;
  //       setUser(data.user);
  //       console.log('data : '+JSON.stringify(response.data.user));
  //     } else {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/user`);
  //       const data = response.data;
  //       setUser(data.user);
  //       console.log('data2 : '+data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErr(error)
  //   }
  // };
  // useEffect(() => {
  //   fetchUser()
  //   const interval = setInterval(() => {
  //     fetchUser();
  //   }, 1 * 60 * 1000);
  //   return () => clearInterval(interval);
  // }, [])
  return (
    <div>
      <h1>

        Stagiaires
      </h1>
    </div>
  )
}

export default Stagiaires
