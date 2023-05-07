import React from 'react'
import './assets/stagiaire.css'
import './assets/aos.css'
import Formations from './formation/Formations'
import Header from './header/Header'
import Contact from './contact/Contact'
import Competences from './competences/Competences'
import Experiences from './experiences/Experiences'
import Interet from './interet/Interet'

const Stagiaire = () => {
    return (
            <div className="cover shadow-lg bg-white" id='cv'>
                <Header />
                <hr className="d-print-none" />
                <Contact/>
                <hr className="d-print-none" />
                <Competences/>
                <hr className="d-print-none" />
                <Experiences />
                <hr className="d-print-none" />
                <Formations />
                <hr className="d-print-none" />
                <Interet/>
            </div>
    )
}

export default Stagiaire
