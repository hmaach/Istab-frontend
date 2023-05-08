import React from 'react'
import { TbLogout } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import './navbar.css'

const User = () => {
    const user = useSelector(selectCurrentUser)
    // const prenom = user.prenom
    // const nom = user.nom
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
            <p id="name"><span className='first-letter'>hamza</span> <span className='first-letter'>maach</span></p>
            <p id="id">DEVOWFS202</p>
          </span>
        </span>
        <button className='logout'>
          <TbLogout id="logout-bottom" />
        </button>
      </div>
  )
}

export default User
