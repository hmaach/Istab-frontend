import React from 'react';
import './experiences.css';
import Experience from './Experience';

const Experiences = (header) => {
  const { experiences } = header;
  if (!experiences) {
    return (
      <div className="work-experience-section px-3 px-lg-4">
        <h2 className="h3 mb-4">Expériences professionnelles</h2>
        <button className="btn btn-primary">Ce champ est libre</button>
      </div>
    );
  }

  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Expériences professionnelles</h2>
      <div className="timeline">
        {experiences.map((experience) => {
          return <Experience experience={experience} key={experience.id} />;
        })}
      </div>
      <button className="btn btn-primary">Ajouter une expérience</button>
    </div>
  );
};

export default Experiences;
