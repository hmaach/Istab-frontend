import React, { useState } from 'react';
import './experiences.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledEditButton = styled(Button)`
  font-size: 16px;
  color: blue;
  transition: color 0.3s ease;
  text-transform: none;
  &:hover {
    color: red;
  }
`;

const Experience = ({ experience }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [titre, setTitre] = useState(experience.titre);
  const [place, setPlace] = useState(experience.place);
  const [dateDeb, setDateDeb] = useState(experience.dateDeb);
  const [dateFin, setDateFin] = useState(experience.dateFin);
  const [missions, setMissions] = useState(experience.missions);

  const handleEditFormOpen = () => {
    setTitre(experience.titre);
    setPlace(experience.place);
    setDateDeb(experience.dateDeb);
    setDateFin(experience.dateFin);
    setMissions(experience.missions);
    setEditFormOpen(true);
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
  };

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleDateDebChange = (event) => {
    setDateDeb(event.target.value);
  };

  const handleDateFinChange = (event) => {
    setDateFin(event.target.value);
  };

  const handleMissionsChange = (event) => {
    setMissions(event.target.value);
  };

  const handleSaveExperience = async () => {
    try {
      // Update the experience values in the state or perform other necessary actions
      console.log('Experience updated successfully');
    } catch (error) {
      console.log(error);
    }
    setEditFormOpen(false);
  };

  return (
    <div className="timeline-card timeline-card-primary card shadow-sm">
      <div className="card-body">
        <div className="experience-header">
          <div className="h5 experience-title">{titre}         
          <StyledEditButton variant="text" onClick={handleEditFormOpen}>
          Modifier
        </StyledEditButton></div>
          <div className="experience-place">{place}</div>
        </div>
        <div className="text-muted text-small mb-2">
          De {dateDeb} à {dateFin}
        </div>
        <div className="experience-missions">
          {Array.isArray(missions) && missions.length > 0 ? (
            <ul>
              {missions.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>
          ) : (
            <div>No missions available</div>
          )}
        </div>

      </div>
      <Dialog open={editFormOpen} onClose={handleEditFormClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Experience</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveExperience();
            }}
          >
            <TextField
              label="Titre"
              variant="outlined"
              fullWidth
              value={titre}
              onChange={handleTitreChange}
            />
            <TextField
              label="Place"
              variant="outlined"
              fullWidth
              value={place}
              onChange={handlePlaceChange}
            />
            <TextField
              label="Date de début"
              variant="outlined"
              fullWidth
              value={dateDeb}
              onChange={handleDateDebChange}
            />
            <TextField
              label="Date de fin"
              variant="outlined"
              fullWidth
              value={dateFin}
              onChange={handleDateFinChange}
            />
            <TextField
              label="Missions"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={missions}
              onChange={handleMissionsChange}
            />
            <DialogActions>
              <Button onClick={handleEditFormClose}>Cancel</Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Experience;
