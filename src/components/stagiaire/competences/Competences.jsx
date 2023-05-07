import React from 'react'
import './competences.css'

const Competences = () => {
  const competences = [
    {
      "id": 1,
      "titre": "Les langages de programmation",
      "skills": [
        "javascript",
        "php",
        "MySql",
        "python",
        "c++"
      ]
    },
    {
      "id": 2,
      "titre": "Les langages de programmation",
      "desc": "description....",
      "skills": [
        "javascript",
        "php",
        "MySql",
        "python",
        "java"
      ]
    },
    {
      "id": 3,
      "titre": "Les langages de programmation",
      "desc": "description....",
    },
    {
      "id": 4,
      "titre": "Les langages de programmation",
      "skills": [
        "javascript",
        "php",
        "MySql",
        "python",
        "java"
      ]
    },
  ]
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3 competence">Compétences
      </h2>
      <div className="row">
        {
          competences.map((competence, index) => {
            return (
              <div className="col-md-6" key={competence.id}>
                <div className="mb-2" >
                  <strong>{competence.titre}</strong><br />
                  {competence.desc &&
                    <span>{competence.desc}<br /></span>
                  }
                  {competence.skills &&
                    <span>{competence.skills.map((skill, index) => {
                      {
                        return <span key={index}>
                          {skill}
                          {index !== competence.skills.length - 1 ? ", " : ""}
                        </span>
                      }
                    })}</span>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Competences
