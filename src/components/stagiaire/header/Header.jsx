import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { updateCv, updateProfilePicture } from '../../../app/api/stagiaireAxios';
import GetCookie from '../../../cookies/JWT/GetCookie';
import './header.css';
import Profile from '../assets/ayadi_oussama.png';
import Stagiaire from '../Stagiaire';
import { Edit as EditIcon, Add as AddIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledEditIcon = styled(EditIcon)`
  font-size: 24px;
  color: blue;
  transition: color 0.3s ease;
  cursor: pointer;
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

const StyledPhotoCameraIcon = styled(PhotoCameraIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const generatePDF = () => {
  const stagiaireElement = document.getElementById('cv'); // ID of the container element for the Stagiaire component

  html2canvas(stagiaireElement).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let pageHeight = pdfHeight;
    let remainingHeight = pdfHeight - pdf.internal.pageSize.getHeight();

    // Check if the content exceeds the page height
    if (remainingHeight > 0) {
      // Add the current page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdf.internal.pageSize.getHeight());

      // Add extra pages for the remaining content
      while (remainingHeight > 0) {
        pdf.addPage();
        pageHeight -= pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, -pageHeight, pdfWidth, pdfHeight);
        remainingHeight -= pdfHeight;
      }
    } else {
      // Add the content to a single page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('stagiaire_cv_.pdf'); // Save the PDF with the desired filename
  });
};

const Header = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [aproposDeMoi, setAproposDeMoi] = useState(props.header.propos);
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const token = GetCookie('jwt');

  useEffect(() => {
    setAproposDeMoi(props.header.propos); // Update the value when the prop changes
  }, [props.header.propos]);

  const handleEditFormOpen = () => {
    setAproposDeMoi(props.header.propos);
    setEditFormOpen(true);
  };

  const handleEditFormClose = () => {
    setEditFormOpen(false);
  };

  const handleAproposDeMoiChange = (event) => {
    setAproposDeMoi(event.target.value);
  };

  const handleSaveAproposDeMoi = async () => {
    try {
      const id = props.header.id;
      const data = { propos: aproposDeMoi };

      await updateCv(id, data, token);
      console.log('CV updated successfully');

      // Update the state with the new value
      setAproposDeMoi(data.propos);
    } catch (error) {
      console.log(error);
    }
    setEditFormOpen(false);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedProfilePicture(file);
    }
  };

  const handleSaveProfilePicture = async () => {
    try {
      const id = props.header.id;
      const formData = new FormData();
      formData.append('profile_picture', selectedProfilePicture);

      await updateProfilePicture(id, formData, token);
      console.log('Profile picture updated successfully');
    } catch (error) {
      console.log(error);
    }
    setEditFormOpen(false);
  };

  const header = props.header;
  return (
    <div>
      <div className="cover-bg p-3 p-lg-4 text-white">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="avatar hover-effect bg-white shadow-sm p-1 position-relative">
              <img
                src={props.header.profile_picture || Profile}
                width="200"
                height="200"
                alt="pic"
              />
              <label htmlFor="profilePictureInput">
                <IconButton component="span" className="edit-profile-picture-icon">
                  <StyledPhotoCameraIcon />
                </IconButton>
              </label>
              <input
                type="file"
                accept="image/*"
                id="profilePictureInput"
                style={{ display: "none" }}
                onChange={handleProfilePictureChange}
              />
            </div>
            {selectedProfilePicture && (
              <div>
                <Button onClick={handleSaveProfilePicture}>Save Profile Picture</Button>
              </div>
            )}
          </div>

          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
              {header.nom} {header.prenom}
            </h2>
            <p data-aos="fade-left" data-aos-delay="100">
              {header.filiere}
            </p>
            <div className="d-print-none" data-aos="fade-left" data-aos-delay="200">
              <Button
                className="btn btn-light text-dark shadow-sm mt-1 me-1"
                onClick={generatePDF}
              >
                CV sous forme PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section pt-4 px-3 px-lg-4 mt-1">
        <div className="row">
          <div className="col-md-6">
            <div className="propos-de-moi-section mb-4">
              <h2 className="h3 mb-3">
                A propos de moi
                {header.propos && (
                  <IconButton aria-label="Edit" className="edit-icon" onClick={handleEditFormOpen}>
                    <StyledEditIcon />
                  </IconButton>
                )}
              </h2>
              {header.propos ? (
                <p>{header.propos}</p>
              ) : (
                <div className="add-icon-container">
                  <StyledAddIcon className="add-icon" onClick={handleEditFormOpen} />
                  <p className="add-text">Ce champ est vide</p>
                </div>
              )}
              <Dialog open={editFormOpen} onClose={handleEditFormClose} fullWidth maxWidth="sm">
                <DialogTitle>Edit Interet</DialogTitle>
                <DialogContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveAproposDeMoi();
                    }}
                  >
                    <TextField
                      label="A propos de moi"
                      variant="outlined"
                      fullWidth
                      value={aproposDeMoi}
                      onChange={handleAproposDeMoiChange}
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
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row mt-2">
              <div className="col-sm-4">
                <div className="pb-1">Filière</div>
              </div>
              <div className="col-sm-8">{header.filiere}</div>
              <div className="col-sm-4">
                <div className="pb-1">Statut</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.statut}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Groupe</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.groupe}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Age</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.dateNais}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Email</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.email}</div>
              </div>
              <div className="col-sm-4">
                <div className="pb-1">Phone</div>
              </div>
              <div className="col-sm-8">
                <div className="pb-1 text-secondary">{header.tel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;