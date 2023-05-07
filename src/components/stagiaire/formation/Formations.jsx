import React from 'react'
import './formations.css'
import Formation from './Formation'

const Formations = () => {
  const formations = [
    {
      "id": 1,
      "titre": "DIPLOME TECHNICIEN SPÉCIALISÉ EN développement digital",
      "place": "Institut des technologies appliquée Berkane",
      "dateDeb": "septembre 2021",
      "dateFin": "juin 2023"
    },
    {
      "id": 2,
      "titre": "DIPLOME TECHNICIEN SPÉCIALISÉ EN développement digital",
      "place": "Institut des technologies appliquée Berkane",
      "dateDeb": "septembre 2021",
      "dateFin": "juin 2023"
    },
    {
      "id": 3,
      "titre": "DIPLOME TECHNICIEN SPÉCIALISÉ EN développement digital",
      "place": "Institut des technologies appliquée Berkane",
      "dateDeb": "septembre 2021",
      "dateFin": "juin 2023"
    },
    {
      "id": 4,
      "titre": "DIPLOME TECHNICIEN SPÉCIALISÉ EN développement digital",
      "place": "Institut des technologies appliquée Berkane",
      "dateDeb": "septembre 2021",
      "dateFin": "juin 2023"
    },
  ]
  return (
    <div>
      <div className="education-section px-3 px-lg-4 pb-4">
        <h2 className="h3 mb-4">Formations
        </h2>
        <div className="timeline">
          {
            formations.map(formation => {
              return <Formation formation = {formation} key={formation.id} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Formations
