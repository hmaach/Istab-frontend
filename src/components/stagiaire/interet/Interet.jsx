import React from 'react'
import './interet.css'

const Interet = () => {
  const interets = ["Voyage", "Football", "Football", "Football"]
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">Centres d'intérêt</h2>
      <div className="row">
        {
          interets.map((interet, index) => {
            return <div className="col-md-6" key={index}>
              <div className="mb-2">
                <strong>{interet}</strong>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Interet
