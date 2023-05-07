import React from 'react'
import './formations.css'

const Formation = (propos) => {
  const formation = propos.formation
  return (
    <div className="timeline-card timeline-card-success card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">{formation.titre}<br/>
          <span className="text-muted h6">{formation.place}</span>
        </div>
        <div className="text-muted text-small mb-2">Depuis {formation.dateFin}
        </div>
      </div>
    </div>
  )
}

export default Formation
