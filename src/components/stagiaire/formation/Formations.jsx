import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { styled } from '@mui/system';
import Formation from './Formation';
import { addFormation } from '../../../app/api/stagiaireAxios';
import GetCookie from '../../../cookies/JWT/GetCookie';

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const Formations = ({ formations, userId }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const token = GetCookie('jwt');
  const [newFormation, setNewFormation] = useState({
    titre: '',
    institut: '',
    dateFin: ''
  });
  console.log ("huuuuuuuuuuuuh" ,userId )

  const handleNewFormationChange = (event) => {
    const { name, value } = event.target;
    setNewFormation((prevFormation) => ({
      ...prevFormation,
      [name]: value
    }));
  };

  const handleAddFormation = async () => {
    try {
      const { titre, institut, dateFin } = newFormation;
      const response = await addFormation(userId, {
        titre,
        institut,
        dateFin
      }, token);
  
      console.log('Formation added successfully:', response);
    } catch (error) {
      console.log(error);
    }
  
    setNewFormation({
      titre: '',
      institut: '',
      dateFin: ''
    });
    setEditFormOpen(false);
  };
  

  const handleNewFormationFormOpen = () => {
    setNewFormation({
      titre: '',
      institut: '',
      dateFin: ''
    });
    setEditFormOpen(true);
  };

  const handleNewFormationFormClose = () => {
    setEditFormOpen(false);
  };

  return (
    <div className="formation-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Formations</h2>
      {formations ? (
        <div className="timeline">
          {formations.map((formation) => (
            <Formation formation={formation} key={formation.id} />
          ))}
        </div>
      ) : (
        <p>No formations found.</p>
      )}

      <div className="add-formation-form">
        {!editFormOpen ? (
          <StyledButton variant="contained" onClick={handleNewFormationFormOpen}>
            Ajouter une formation
          </StyledButton>
        ) : (
          <Dialog open={editFormOpen} onClose={handleNewFormationFormClose} fullWidth maxWidth="sm">
            <DialogTitle>Ajouter une formation</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  label="Titre"
                  variant="outlined"
                  fullWidth
                  name="titre"
                  value={newFormation.titre}
                  onChange={handleNewFormationChange}
                />
                <TextField
                  label="Institut"
                  variant="outlined"
                  fullWidth
                  name="institut"
                  value={newFormation.institut}
                  onChange={handleNewFormationChange}
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
                  value={newFormation.dateFin}
                  onChange={handleNewFormationChange}
                />
                <DialogActions>
                  <Button onClick={handleNewFormationFormClose}>Annuler</Button>
                  <Button onClick={handleAddFormation} color="primary">
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

export default Formations;
