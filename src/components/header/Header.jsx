import React from 'react'
import {RiSearchLine} from "react-icons/ri";
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className="rechercher">
                <form method='GET' id="search-box">
                    <input className='search-input' placeholder=" Rechercher..." id="serch-input" type="text" />
                    <button type='submit'><RiSearchLine id="search-icon1" /></button>
                </form>
            </div>
            <Link className='login-button' to='/login'>Connexion</Link>
        </div>
    )
}

export default Header
