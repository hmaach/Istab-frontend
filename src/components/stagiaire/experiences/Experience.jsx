import React from 'react'
// import './experiences.css'

const Experience = (props) => {
  const experience = props.experience
  return (
    <div className="timeline-card timeline-card-primary card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">{experience.titre}
          <span className="text-muted h6"> {experience.place}</span>
        </div>
        <div className="text-muted text-small mb-2">De {experience.dateDeb} à {experience.dateFin}</div>
        <div>
          <ul>
            {
              experience.missions.map((mission, index) => {
                return <li key={index}>
                  {mission}
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
