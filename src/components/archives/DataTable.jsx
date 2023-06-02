import React from 'react';

const DataTable = ({ data, onCategoryClick }) => {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px', background: 'lightgray' }}>PDF Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((category) => (
          <React.Fragment key={category.id}>
            <tr onClick={() => onCategoryClick(category.id)} style={{ cursor: 'pointer' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{category.label}</td>
            </tr>
            {category.showPDFs && category.pdfs.map((pdf) => (
              <tr key={pdf.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <a href={pdf.path} target="_blank" rel="noopener noreferrer">
                    {pdf.libelle}
                  </a>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
