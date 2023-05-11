import React from 'react'
import { TbLogout } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import './navbar.css'
import Logout from '../../features/logout/Logout'

const User = () => {
  const user = useSelector(selectCurrentUser)
  if (user) {
    let nom = user.nom
    let prenom = user.prenom
    return (
      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="person"
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
          />
          <span>
            {/* <p id="name"><span className='first-letter'>{prenom}</span> <span className='first-letter'>{nom}</span></p> */}
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
