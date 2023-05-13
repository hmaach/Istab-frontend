import React, { useEffect } from 'react'
import { TbLogout } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, setCredentials } from '../../features/auth/authSlice'
import './navbar.css'
import Logout from '../../features/logout/Logout'

const User = () => {
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch();

  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'))
      if (storedUser) {
        dispatch(setCredentials({
          user: storedUser,
          token: localStorage.getItem('token')
        }))
      }
    }, [dispatch])

  if (user) {
    let nom = user.nom
    let prenom = user.prenom
    return (
      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="person"
            src="ayadi.jpeg"
            alt="profile"
          />
          <span>
            <p id="name"><span className='first-letter'>{prenom}</span> <span className='first-letter'>{nom}</span></p>
            <p id="id">DEVOWFS202</p>
          </span>
        </span>
        <Logout />
      </div>
    )
  } else {
    return null
  }
}

export default User
