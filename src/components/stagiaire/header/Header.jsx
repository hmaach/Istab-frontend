import React from 'react'
import './header.css'
import Profile from '../assets/ayadi_oussama.jpg'
import Stagiaire from '../Stagiaire'

const Header = () => {
  const stagiaire = {
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
    <div>
      <div className="cover-bg p-3 p-lg-4 text-white">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="avatar hover-effect bg-white shadow-sm p-1"><img src={Profile} width="200"
              height="200" alt='pic'/></div>
          </div>
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{stagiaire.nom} {stagiaire.prenom} </h2>
            <p data-aos="fade-left" data-aos-delay="100">{stagiaire.filiere}</p>
            <div className="d-print-none" data-aos="fade-left" data-aos-delay="200"><a
              className="btn btn-light text-dark shadow-sm mt-1 me-1"
              href="https://drive.google.com/file/d/1OB87kEfahkYI6eEnXdfODRNZ1Mu_CghZ/view?usp=sharing"
              target="_blank">CV sous forme PDF</a></div>
          </div>
        </div>
      </div>
      <div className="about-section pt-4 px-3 px-lg-4 mt-1">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h3 mb-3">A propos de moi</h2>
            <p>{stagiaire.propos}</p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row mt-2">
              <div className="col-sm-4">
                <div className="pb-1">Filière</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.filiere}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Statut</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.statut}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Groupe</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.groupe}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Age</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.dateNais}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Email</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.email}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Phone</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{stagiaire.tel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
