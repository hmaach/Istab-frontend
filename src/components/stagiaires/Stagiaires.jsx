import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList as List } from 'react-window';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import './CustomDataTable.css';
import { fetchData, importStagiaire } from '../../app/api/stagiaireAxios';
import * as XLSX from 'xlsx';


const exportToExcel = (data) => {
  const jsonData = data.map((item) => {
    return {
      'ID Inscription': item.id_inscriptionsessionprogramme,
      'Matricule Etudiant': item.MatriculeEtudiant,
      'Nom': item.Nom,
      'Prenom': item.Prenom,
      'Sexe': item.Sexe,
      'Etudiant Actif': item.EtudiantActif,
      'Diplome': item.diplome,
      'Principale': item.Principale,
      'Libelle Long': item.LibelleLong,
      'Code Diplome': item.CodeDiplome,
      'Code': item.Code,
      'Etudiant Payant': item.EtudiantPayant,
      'Code Diplome 1': item.codediplome1,
      'Prenom 2': item.prenom2,
      'Date Naissance': item.DateNaissance,
      'Site': item.Site,
      'Regime inscription': item.Regimeinscription,
      'Date Inscription': item.DateInscription,
      'Date Dossier Complet': item.DateDossierComplet,
      'Lieu Naissance': item.LieuNaissance,
      'Motif Admission': item.MotifAdmission,
      'CIN': item.CIN,
      'N° Téléphone': item.NTelephone,
      'N° Téléphone du Tuteur': item.NTel_du_Tuteur,
      'Adresse': item.Adresse,
      'Nationalité': item.Nationalite,
      'Année d\'étude': item.anneeEtude,
      'Nom Arabe': item.Nom_Arabe,
      'Prénom Arabe': item.Prenom_arabe,
      'Niveau Scolaire': item.NiveauScolaire,
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Stagiaires');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  saveAsExcelFile(excelBuffer, 'stagiaires');
};

const saveAsExcelFile = (buffer, fileName) => {
  const data = new Blob([buffer], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(data);
  link.download = fileName + '.xlsx';
  link.click();
};

const Stagiaires = () => {
  const [file, setFile] = useState(null);
  const [imported, setImported] = useState(false);
  const [importedData, setImportedData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const handleExportToExcel = () => {
    exportToExcel(data);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData(page, pageSize);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };


    getData();
  }, [page, pageSize]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const importedData = await importStagiaire(file);
      setImportedData(importedData);
      console.log('Import successful');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const Row = ({ index, style }) => {
    const rowData = importedData.length > 0 ? importedData[index] : data[index];

    return (
      <TableRow style={style} key={rowData.id_inscriptionsessionprogramme}>
        <TableCell>{rowData.id_inscriptionsessionprogramme}</TableCell>
        <TableCell>{rowData.MatriculeEtudiant}</TableCell>
        <TableCell>{rowData.Nom}</TableCell>
        <TableCell>{rowData.Prenom}</TableCell>
        <TableCell>{rowData.Sexe}</TableCell>
        <TableCell>{rowData.EtudiantActif}</TableCell>
        <TableCell>{rowData.diplome}</TableCell>
        <TableCell>{rowData.Principale}</TableCell>
        <TableCell>{rowData.LibelleLong}</TableCell>
        <TableCell>{rowData.CodeDiplome}</TableCell>
        <TableCell>{rowData.Code}</TableCell>
        <TableCell>{rowData.EtudiantPayant}</TableCell>
        <TableCell>{rowData.codediplome1}</TableCell>
        <TableCell>{rowData.prenom2}</TableCell>
        <TableCell>{rowData.DateNaissance}</TableCell>
        <TableCell>{rowData.Site}</TableCell>
        <TableCell>{rowData.Regimeinscription}</TableCell>
        <TableCell>{rowData.DateInscription}</TableCell>
        <TableCell>{rowData.DateDossierComplet}</TableCell>
        <TableCell>{rowData.LieuNaissance}</TableCell>
        <TableCell>{rowData.MotifAdmission}</TableCell>
        <TableCell>{rowData.CIN}</TableCell>
        <TableCell>{rowData.NTelephone}</TableCell>
        <TableCell>{rowData.NTel_du_Tuteur}</TableCell>
        <TableCell>{rowData.Adresse}</TableCell>
        <TableCell>{rowData.Nationalite}</TableCell>
        <TableCell>{rowData.anneeEtude}</TableCell>
        <TableCell>{rowData.Nom_Arabe}</TableCell>
        <TableCell>{rowData.Prenom_arabe}</TableCell>
        <TableCell>{rowData.NiveauScolaire}</TableCell>
      </TableRow>
    );
  };

  return (
    <div className="datatable-container">
      <div className="datatable-wrapper">
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleFileUpload}>
          Upload
        </Button>
        <Button variant="contained" color="primary" onClick={handleExportToExcel}>
          Export to Excel
        </Button>
      </div>
      <div className="custom-datatable">
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>ID Inscription</TableCell>
              <TableCell>Matricule Etudiant</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prenom</TableCell>
              <TableCell>Sexe</TableCell>
              <TableCell>Etudiant Actif</TableCell>
              <TableCell>Diplome</TableCell>
              <TableCell>Principale</TableCell>
              <TableCell>Libelle Long</TableCell>
              <TableCell>Code Diplome</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Etudiant Payant</TableCell>
              <TableCell>Code Diplome 1</TableCell>
              <TableCell>Prenom 2</TableCell>
              <TableCell>Date Naissance</TableCell>
              <TableCell>Site</TableCell>
              <TableCell>Regime inscription</TableCell>
              <TableCell>Date Inscription</TableCell>
              <TableCell>Date Dossier Complet</TableCell>
              <TableCell>Lieu Naissance</TableCell>
              <TableCell>Motif Admission</TableCell>
              <TableCell>CIN</TableCell>
              <TableCell>N° Téléphone</TableCell>
              <TableCell>N° Téléphone du Tuteur</TableCell>
              <TableCell>Adresse</TableCell>
              <TableCell>Nationalité</TableCell>
              <TableCell>Année d'étude</TableCell>
              <TableCell>Nom Arabe</TableCell>
              <TableCell>Prénom Arabe</TableCell>
              <TableCell>Niveau Scolaire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {importedData.length > 0 ? (
              <List
                height={500}
                itemCount={importedData.length}
                itemSize={50}
                width="100%"
              >
                {Row}
              </List>
            ) : (
              data.map((rowData, index) => (
                <Row index={index} key={rowData.id_inscriptionsessionprogramme} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {!imported && (
        <Button variant="contained" color="primary" onClick={handleLoadMore} disabled={isLoading}>
          Load More
        </Button>
      )}
    </div>
    </div>
  </div>
  );
};

export default Stagiaires;
