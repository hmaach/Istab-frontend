import React, { useEffect } from 'react'
import { RiSearchLine } from "react-icons/ri";
import './header.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, setCredentials } from '../../features/auth/authSlice';

const Header = () => {
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
    return (
        <div className='container'>
            <div className="rechercher">
                <form method='GET' id="search-box">
                    <input className='search-input' placeholder=" Rechercher..." id="serch-input" type="text" />
                    <button type='submit'><RiSearchLine id="search-icon1" /></button>
                </form>
            </div>
            {!user &&
                <Link className='login-button' to='/login'>Connexion</Link>
            }
        </div>
    )
}

export default Header
