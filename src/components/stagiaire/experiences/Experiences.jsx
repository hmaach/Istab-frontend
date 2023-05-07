import React from 'react'
import './experiences.css'
import Experience from './Experience'

const Experiences = () => {
  const experiences = [
    {
      "id": "1",
      "titre": "Développeur web",
      "place": "EhdatheyatGS Oujda-Angad, Maroc",
      "dateDeb": "mai 2021",
      "dateFin": "juin 2021",
      "missions": [
        "Maîtriser l'un des langages de programmation : javascript , php",
        "designer site web",
        "Concevoir et développer un site web"
      ]
    },
    {
      "id": "2",
      "titre": "Développeur web",
      "place": "EhdatheyatGS Oujda-Angad, Maroc",
      "dateDeb": "mai 2021",
      "dateFin": "juin 2021",
      "missions": [
        "Maîtriser l'un des langages de programmation : javascript , php",
        "designer site web",
        "Concevoir et développer un site web"
      ]
    },
    {
      "id": "3",
      "titre": "Développeur web",
      "place": "EhdatheyatGS Oujda-Angad, Maroc",
      "dateDeb": "mai 2021",
      "dateFin": "juin 2021",
      "missions": [
        "Maîtriser l'un des langages de programmation : javascript , php",
        "designer site web",
        "Concevoir et développer un site web"
      ]
    }
  ]
  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Expériences professionnelles</h2>
      <div className="timeline">
        {
          experiences.map((experience) => {
            return <Experience experience={experience} key={experience.id} />
          })
        }
      </div>
    </div>
  )
}

export default Experiences
