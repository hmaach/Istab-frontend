import React, { useState } from 'react';
import './competences.css';

import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
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

const StyledAddIcon = styled(AddIcon)`
  font-size: 48px;
  color: blue;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Competences = ({ header }) => {
  const { competences } = header;

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [categorie, setCategorie] = useState('');
  const [description, setDescription] = useState('');

  const handleEditFormOpen = (competence, index) => {
    setEditIndex(index);
    setCategorie(competence.categorie);
    setDescription(competence.desc);
    setEditFormOpen(true);
  };

  const handleAddFormOpen = () => {
    setEditIndex(null);
    setCategorie('');
    setDescription('');
    setEditFormOpen(true);
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
  };

  const handleCategorieChange = (event) => {
    setCategorie(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveAproposDeMoi = async () => {
    try {
      // Update the competence values in the state or perform other necessary actions
      console.log('CV updated successfully');
    } catch (error) {
      console.log(error);
    }
    setEditFormOpen(false);
  };

  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3 competence">Compétences</h2>
      <Dialog
        open={editFormOpen}
        onClose={handleEditFormClose}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>Edit Compétences</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveAproposDeMoi();
            }}
          >
            <TextField
              label="categorie"
              multiline
              variant="outlined"
              fullWidth
              value={categorie}
              onChange={handleCategorieChange}
            />
            <TextField
              label="description"
              multiline
              variant="outlined"
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
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
      <div className="row">
        {competences && competences.length > 0 ? (
          // Render existing competences
          competences.map((competence, index) => (
            <div className="col-md-6" key={index}>
              <div className="mb-2">
                <strong>{competence.categorie}</strong>
                <br />
                {competence.desc && <span>{competence.desc}<br /></span>}
                {competence.skills && (
                  <span>
                    {competence.skills.map((skill, skillIndex) => (
                      <span key={skillIndex}>
                        {skill}
                        {skillIndex !== competence.skills.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                )}
                <StyledEditButton
                  variant="text"
                  onClick={() => handleEditFormOpen(competence, index)}
                >
                  Modifier
                </StyledEditButton>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="mb-2 text-center">
              <StyledAddIcon className="add-icon" onClick={handleAddFormOpen} />
              <p className="add-text">Ce champ est vide</p>
            </div>
          </div>
        )}
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <div className="mb-2 text-center">
            <StyledAddIcon className="add-icon" onClick={handleAddFormOpen} />
            <p className="add-text">Ajouter une compétence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
