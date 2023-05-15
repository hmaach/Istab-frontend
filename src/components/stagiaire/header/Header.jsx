import React from 'react'
import './header.css'
import Profile from '../assets/ayadi_oussama.jpg'
import Stagiaire from '../Stagiaire'

const Header = (props) => {
 
  const header = props.header
  return (
    <div>
      <div className="cover-bg p-3 p-lg-4 text-white">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="avatar hover-effect bg-white shadow-sm p-1"><img src={Profile} width="200"
              height="200" alt='pic'/></div>
          </div>
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{header.nom} {header.prenom} </h2>
            <p data-aos="fade-left" data-aos-delay="100">{header.filiere}</p>
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
            <p>{header.propos}</p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row mt-2">
              <div className="col-sm-4">
                <div className="pb-1">Filière</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.filiere}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Statut</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.statut}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Groupe</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.groupe}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Age</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.dateNais}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Email</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.email}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Phone</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.tel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
