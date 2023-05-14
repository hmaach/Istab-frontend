import React from 'react'
import Welcome from '../../features/auth/Welcome'
import Right from '../right/right'
import Main from './main/Main'

const Accueil = () => {
  return (
    <div className='spinner_main'>
      <Main />
      <Right />
    </div>
  )
}

export default Accueil
