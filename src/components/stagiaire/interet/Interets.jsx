import React, { useState } from 'react';
import './interet.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
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

const Interets = ({ interet }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [libelle, setLibelle] = useState(interet.libelle);

  const handleEditFormOpen = () => {
    setLibelle(interet.libelle);
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
        <div className="h5 mb-1">{libelle}
        <StyledEditButton variant="text" onClick={handleEditFormOpen}>
          Modifier
        </StyledEditButton></div>

      </div>
      <Dialog open={editFormOpen} onClose={handleEditFormClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Interet</DialogTitle>
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
