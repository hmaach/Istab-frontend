import React, { useState } from 'react';
import './interet.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { updateInteret } from '../../../app/api/stagiaireAxios';
import GetCookie from '../../../cookies/JWT/GetCookie';

const StyledEditButton = styled(Button)`
  font-size: 16px;
  color: blue;
  transition: color 0.3s ease;
  text-transform: none;
  &:hover {
    color: red;
  }
`;

const Interets = ({ interet }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [libelle, setLibelle] = useState(interet ? interet.libelle : '');
  const token = GetCookie('jwt');

  console.log ("huuuuuuuuuuuuh" ,interet.id )

  const handleEditFormOpen = () => {
    setLibelle(interet ? interet.libelle : '');
    setEditFormOpen(true);
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
  };

  const handleLibelleChange = (event) => {
    setLibelle(event.target.value);
  };

  const handleSaveInteret = async () => {
    try {
      const updatedInteret = await updateInteret(interet.user_id, interet.id, { libelle }, token); // Call the updateInteret function
      // Update the interet value in the state or perform other necessary actions
      console.log('Interet updated successfully');
    } catch (error) {
      console.log(error);
    }
    setEditFormOpen(false);
  };


  return (
    <div className="timeline-card timeline-card-danger card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">
          {libelle}
          {interet ? (
            <StyledEditButton variant="text" onClick={handleEditFormOpen}>
              Modifier
            </StyledEditButton>
          ) : (
            <div>
              <Button variant="text" onClick={handleEditFormOpen}>
                Ajouter une intérêt
              </Button>
              <p className="add-text">Ce champ est vide</p>
            </div>
          )}
        </div>
      </div>
      <Dialog open={editFormOpen} onClose={handleEditFormClose} fullWidth maxWidth="sm">
        <DialogTitle>{interet ? 'Edit Interet' : 'Add Interet'}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveInteret();
            }}
          >
            <TextField
              label="Libelle"
              variant="outlined"
              fullWidth
              value={libelle}
              onChange={handleLibelleChange}
              sx={{ mt: 2 }}
              required
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

export default Interets;
