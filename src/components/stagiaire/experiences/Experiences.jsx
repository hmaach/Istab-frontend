import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { styled } from '@mui/system';
import Experience from './Experience';
import { addExperience } from '../../../app/api/stagiaireAxios';

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const Experiences = ({ experiences, userId  }) => {
 



  const [editFormOpen, setEditFormOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    titre: '',
    place: '',
    dateDeb: '',
    dateFin: '',
    mission: ''
  });

  const handleNewExperienceChange = (event) => {
    const { name, value } = event.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value
    }));
  };

  const handleAddExperience = async () => {
    try {
      const { titre, dateDeb, dateFin, mission } = newExperience;
      const response = await addExperience({
        userId: userId, 
        titre,
        dateDeb,
        dateFin,
        mission
      });
  
      console.log('Experience added successfully:', response);
    } catch (error) {
      console.log(error);
    }
  
    setNewExperience({
      titre: '',
      place: '',
      dateDeb: '',
      dateFin: '',
      mission: ''
    });
    setEditFormOpen(false);
  };

  const handleNewExperienceFormOpen = () => {
    setNewExperience({
      titre: '',
      place: '',
      dateDeb: '',
      dateFin: '',
      mission: ''
    });
    setEditFormOpen(true);
  };

  const handleNewExperienceFormClose = () => {
    setEditFormOpen(false);
  };

  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Expériences professionnelles</h2>
      {experiences ? (
        <div className="timeline">
          {experiences.map((experience) => (
            <Experience experience={experience} key={experience.id} />
          ))}
        </div>
      ) : (
        <p>No experiences found.</p>
      )}

      <div className="add-experience-form">
        {!editFormOpen ? (
          <StyledButton variant="contained" onClick={handleNewExperienceFormOpen}>
            Ajouter une expérience
          </StyledButton>
        ) : (
          <Dialog open={editFormOpen} onClose={handleNewExperienceFormClose} fullWidth maxWidth="sm">
            <DialogTitle>Ajouter une expérience</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  label="Titre"
                  variant="outlined"
                  fullWidth
                  name="titre"
                  value={newExperience.titre}
                  onChange={handleNewExperienceChange}
                />
                <TextField
                  label="Place"
                  variant="outlined"
                  fullWidth
                  name="place"
                  value={newExperience.place}
                  onChange={handleNewExperienceChange}
                />
                <TextField
                  label="Date de début"
                  variant="outlined"
                  fullWidth
                  name="dateDeb"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={newExperience.dateDeb}
                  onChange={handleNewExperienceChange}
                />
                <TextField
                  label="Date de fin"
                  variant="outlined"
                  fullWidth
                  name="dateFin"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={newExperience.dateFin}
                  onChange={handleNewExperienceChange}
                />
                <TextField
                  label="Mission"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  name="mission"
                  value={newExperience.mission}
                  onChange={handleNewExperienceChange}
                />
                <DialogActions>
                  <Button onClick={handleNewExperienceFormClose}>Annuler</Button>
                  <Button onClick={handleAddExperience} color="primary">
                    Ajouter
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Experiences;
