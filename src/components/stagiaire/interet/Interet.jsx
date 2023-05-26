import React from 'react'
import './interet.css'
import Interets from './Interets';

const Interet = (header) => {
  const { interets } = header;
  if (!interets) {
    return null; 
  }

  
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">Centres d'intérêt</h2>
      <div className="row">
      <div className="timeline">
          {
            interets.map(interet => {
              return <Interets interet = {interet} key={interet.id} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Interet
