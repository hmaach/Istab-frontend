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
    const header = {
        "id":"1",
        "nom":"ayadi",
        "prenom":"oussama",
        "filiere":"Développement Digital",
        "groupe":"DEVOWFS201",
        "email":"ayadiossama4@gmail.com",
        "statut":"2e Année",
        "dateNais":"",
        "tel":"0626005713",
        "profilePic":"",
        "cvPdf":"",
        "propos":"Bonjour, je suis un entrepreneur / développeur Web FULL-STACK, je suis bon au travail d'équipe, mon superpouvoir je suis un chercheur et j'apprends rapidement. Je maîtrise les différentes étapes techniques de la création d'un site ou d'une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance"
      }

    return (
            <div className="cover shadow-lg bg-white" id='cv'>
                <Header 
                 header={header}
                 />
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
