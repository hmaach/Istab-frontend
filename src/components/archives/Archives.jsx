import React, { useEffect, useState } from 'react';
import { getMyArchive } from '../../app/api/ArchiveAxios';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import GetCookie from '../../cookies/JWT/GetCookie';
import DataTable from './DataTable';
import './archives.css'

const Archives = () => {
  const curUser = useSelector(selectCurrentUser);
  const token = GetCookie('jwt');
  const [pdfCategories, setPdfCategories] = useState([]);

  const handleGetMyArchive = () => {
    getMyArchive(token)
      .then((data) => {
        console.log(data.pdfCategories);
        setPdfCategories(data.pdfCategories);
      });
  };

  const handleCategoryClick = (categoryId) => {
    setPdfCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            showPDFs: !category.showPDFs,
          };
        }
        return category;
      });
    });
  };

  useEffect(() => {
    handleGetMyArchive();
    const interval = setInterval(() => {
      handleGetMyArchive();
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='archives'>
      <DataTable data={pdfCategories} onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Archives;
