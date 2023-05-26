import React from 'react'
import './formations.css'
import Formation from './Formation'

const Formations = (header) => {
  const { formations } = header ;
  if (!formations) {
    return null; 
  }
  
  
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
