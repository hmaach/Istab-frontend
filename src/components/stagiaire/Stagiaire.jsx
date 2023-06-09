import React, { useState, useEffect } from 'react';
import './assets/stagiaire.css';
import './assets/aos.css';
import Formations from './formation/Formations';
import Header from './header/Header';
import Contact from './contact/Contact';
import Competences from './competences/Competences';
import Experiences from './experiences/Experiences';
import Interet from './interet/Interet';
import { getCv } from '../../app/api/stagiaireAxios';
import { useParams } from 'react-router-dom';

const Stagiaire = () => {
  const { id } = useParams();
  const [stagiaireData, setStagiaireData] = useState({});

  useEffect(() => {
    getCv(id)
      .then((data) => {
        setStagiaireData({
          id: data.stagiaire.id,
          nom: data.stagiaire.nom,
          prenom: data.stagiaire.prenom,
          tel: data.stagiaire.tel,
          email: data.stagiaire.email,
          filiere: data.stagiaire.groupe.filiere.libelle,
          groupe: data.stagiaire.groupe.libelle,
          statut: data.stagiaire.statut,
          interets: data.stagiaire.interets,
          propos: data.stagiaire.cv ? data.stagiaire.cv.propos : '',
          competences: data.stagiaire.competences,
          formations: data.stagiaire.formations,
          experiences: data.stagiaire.experiences.map((experience) => ({
            ...experience,
            missions: experience.missions ? JSON.parse(experience.missions) : [],
          })),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleAproposDeMoiChange = (newAproposDeMoi) => {
    setStagiaireData((prevState) => ({
      ...prevState,
      propos: newAproposDeMoi,
    }));
  };

  return (
    <div className="cover shadow-lg bg-white" id="cv">
      <Header
        header={stagiaireData}
        id={id}
        onAproposDeMoiChange={handleAproposDeMoiChange}
      />

      <hr className="d-print-none" />
      <Contact />
      <hr className="d-print-none" />
      <Competences header={stagiaireData} />
      <hr className="d-print-none" />
      <Experiences experiences={stagiaireData.experiences} />

      <hr className="d-print-none" />
      <Formations formations={stagiaireData.formations} />
      <hr className="d-print-none" />
      <Interet interets={stagiaireData.interets} />
    </div>
  );
};

export default Stagiaire;
