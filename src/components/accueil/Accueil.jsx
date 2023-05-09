import React from 'react'
import Welcome from '../../features/auth/Welcome'
import Right from '../right/right'
import Main from './main/main'

const Accueil = () => {
  return (
    <div>
        {/* <h1>
      Accueil
        </h1>
        <Welcome/> */}
        <Main/>
        <Right/>
    </div>
  )
}

export default Accueil
