import React from 'react';
import { PictureAsPdf } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import './Post.css'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Switch,
    Autocomplete,
    TextField,
} from '@mui/material';
import { useRef } from 'react';

export default function SimpleAccordion({ filieres, onSubmit,user }) {

    const archive_categorie = user.pdf_categories;
    const [postLib, setPostLib] = useState('');
    const [postType, setPostType] = useState('');
    const [audience, setAudience] = useState('');
    const [filiere_id, setFiliere] = useState('');
    const [pdf_file, setPdf_file] = useState(null);
    const [pdf_archive_categorie, setPdf_archive_categorie] = useState(false);
    const [pdf_archive_categorie_value, setPdf_archive_categorie_value] = useState(null);
    const fileInputRef = useRef(null);
    const maxLength = 100;

    const handleChangeAudience = (event) => {
        setAudience(event.target.value);
    };

    const handleChangeFiliere = (event) => {
        setFiliere(event.target.value)

    };

    const handlePostTypeChange = (e) => {
        setPostType(e.target.value)
    }

    const handleChange = (e) => {
        const text = e.target.value;
        setPostLib(text);
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelect = (event) => {
        setPdf_file(event.target.files[0])
    };

    const addPdfToArchive = (e) => {
        setPdf_archive_categorie(!pdf_archive_categorie)
    };

    const handleChange_pdf_categorie = (e, value) => {
        if (value) {
            const option = archive_categorie.find((item) => item.id === value.id);
            if (option) {
                setPdf_archive_categorie_value(option);
                console.log(option);
            } else {
                // Handle the case when the selected option is not found
                console.log("Selected option not found");
            }
        } else {
            setPdf_archive_categorie_value(null);
        }
    };

    const removePdf = (e) => {
        e.preventDefault()
        setPdf_file(null)
        setPdf_archive_categorie(false)
    };


    const handleSubmit = (e) => {

        e.preventDefault()
        const postLibelle = postLib;
        const postTypeValue = postType;
        const newPost = {
            libelle: postLibelle,
            type: postTypeValue,
            audience: audience,
            audience_id: filiere_id,
            pdf: pdf_file,
            pdf_archive_categorie: pdf_archive_categorie,
            pdfCategorieId: pdf_archive_categorie_value?.id

        };

        onSubmit(newPost);
        setPostLib('');
        setPostType('');
        setAudience('');
        setFiliere('');
        setPdf_archive_categorie_value(null);
        setPdf_archive_categorie(false);
        setPdf_file(null)
    };

    return (
        <div className='addPost'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Ajouter un poste</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={handleSubmit} className="wrapper">
                        <div className='filtrage_audience'>
                            <FormControl sx={{ m: 0, minWidth: 130, }}>
                                <InputLabel id="demo-simple-select-autowidth-label " sx={{ fontSize: '17px', marginTop: '-11px' }}>Audience</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={audience}
                                    onChange={handleChangeAudience}
                                    autoWidth
                                    required
                                    label="Audience"
                                    sx={{ height: '34px', borderRadius: '20px' }}
                                >
                                    <MenuItem value="public">Public</MenuItem>
                                    <MenuItem value="etablissement">Etablissement</MenuItem>
                                    <MenuItem value="filiere">Filière</MenuItem>
                                    <MenuItem value="formateurs">Formateurs</MenuItem>
                                </Select>
                            </FormControl>
                            {audience === "groupe" || audience === "filiere" ?
                                <FormControl sx={{ m: 0, minWidth: 100, }}>
                                    <InputLabel id="demo-simple-select-autowidth-label " sx={{ fontSize: '17px', marginTop: '-11px' }}>Filière</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={filiere_id}
                                        onChange={handleChangeFiliere}
                                        autoWidth
                                        required
                                        label="Filière"
                                        sx={{ height: '34px', borderRadius: '20px' }}
                                    >
                                        {filieres &&
                                            filieres.map(filiere => {
                                                return (<MenuItem key={filiere.id} value={filiere.id}>{filiere.libelle}</MenuItem>)
                                            })
                                        }
                                    </Select>
                                </FormControl>
                                : null
                            }
                        </div>
                        <textarea
                            className="input-box"
                            value={postLib}
                            onChange={handleChange}
                        >
                        </textarea>
                        {pdf_file &&
                            <div className='pdf_file'>
                                <span className='pdf_name'>{pdf_file.name.substring(0, 15)}...pdf</span>
                                <div className='switch_pdf'>
                                    <Switch
                                        id="pdf_archive"
                                        onChange={addPdfToArchive}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <label htmlFor="pdf_archive" className='label_archive_pdf'>Ajouter au archive</label>
                                </div>
                                <span className='remove_pdf' onClick={removePdf}><CloseIcon /></span>
                            </div>
                        }
                        {pdf_file && pdf_archive_categorie
                            ?
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={archive_categorie}
                                value={pdf_archive_categorie_value}
                                onChange={(event, newValue) => {
                                    setPdf_archive_categorie_value(newValue);
                                }}
                                isOptionEqualToValue={(option, value) => option.id === value?.id}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Categorie" />}
                            />
                            : null}
                        <div className="bottom">
                            <ul className="icons">
                                <li>
                                    <FormControl sx={{ m: 0, minWidth: 153 }}>
                                        <InputLabel
                                            id="demo-simple-select-autowidth-label"
                                            sx={{ fontSize: '17px', marginTop: '-11px' }}
                                        >
                                            Type de poste
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            autoWidth
                                            label="Type de poste"
                                            value={postType}
                                            sx={{ height: '34px', borderRadius: '20px' }}
                                            required
                                            onChange={handlePostTypeChange}
                                        >
                                            <MenuItem value="announce">Announce</MenuItem>
                                            <MenuItem value="cour">Cour</MenuItem>
                                            <MenuItem value="exercise">Exercice</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                                {!pdf_file &&
                                    <li className="pdfPost" onClick={handleIconClick}>
                                        <input
                                            type="file"
                                            id="pdfInput"
                                            accept=".pdf"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileSelect}
                                        />
                                        <PictureAsPdf />
                                    </li>
                                }
                            </ul>
                            <div className="content">
                                <span className="counter">{maxLength - postLib.length}</span>
                                <button
                                    className={postLib.length > 0 ? 'active_poster' : ''}
                                    type="submit"
                                >
                                    Poster
                                </button>
                            </div>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
