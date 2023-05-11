import React from 'react'
import { TbLogout } from 'react-icons/tb'
import { Navigate, useLocation } from 'react-router-dom'

const Logout = () => {
    const location = useLocation()
    const handleLogout = (e) => {
        // e.preventDefault()
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return (
        <Navigate to="/login"  replace />)
    }
    return (
        <button onClick={handleLogout} className='logout'>
            <TbLogout id="logout-bottom" />
        </button>
    )
}

export default Logout
