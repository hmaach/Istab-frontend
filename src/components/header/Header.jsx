import React from 'react'
import {RiSearchLine} from "react-icons/ri";
import './header.css'

const Header = () => {
    return (
        <div className='container'>
            <button className='login-button'>Connexion</button>
            <div className="rechercher">
                <form method='get' id="search-box">
                    <input className='search-input' placeholder=" Rechercher..." id="serch-input" type="text" />
                    <button type='submit'><RiSearchLine id="search-icon" /></button>
                </form>
            </div>
        </div>
    )
}

export default Header
