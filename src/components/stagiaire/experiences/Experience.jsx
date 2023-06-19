import React, { useState } from 'react';
import './experiences.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { updateExperience } from '../../../app/api/stagiaireAxios';


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
  const [mission, setMission] = useState(experience.mission);

  console.log('titre:', titre);
  console.log('Mission:', mission);
  console.log('Experience ID:', experience.id);
  console.log('User ID:', experience.user_id);


  const handleEditFormOpen = () => {
    setTitre(experience.titre);
    setPlace(experience.place);
    setDateDeb(experience.dateDeb);
    setDateFin(experience.dateFin);
    setMission(experience.mission);

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
    setMission(event.target.value);
  };

  const handleSaveExperience = async () => {
    try {
      const updatedExperience = {
        titre,
        dateDeb,
        dateFin,
        mission,
      };
  
      // Call the API function to update the experience
      await updateExperience(experience.user_id, experience.id, updatedExperience);
  
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
          <div className="h5 experience-title">
            {titre}
            <StyledEditButton variant="text" onClick={handleEditFormOpen}>
              Modifier
            </StyledEditButton>
          </div>
          <div className="experience-place">{place}</div>
        </div>
        <div className="text-muted text-small mb-2">
          De {dateDeb} à {dateFin}
        </div>
        <div className="experience-missions">{mission}</div>
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
              label="Date de début"
              variant="outlined"
              fullWidth
              value={dateDeb}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDateDebChange}
            />
            <TextField
              label="Date de fin"
              variant="outlined"
              fullWidth
              value={dateFin}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDateFinChange}
            />
            <TextField
              label="Missions"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={mission}
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
