// PDFDataContext.js

import React, { createContext, useContext, useState } from 'react';

const PDFDataContext = createContext();

export const usePDFData = () => useContext(PDFDataContext);

export const PDFDataProvider = ({ children }) => {
    const [pdfData, setPDFData] = useState(null);

    return (
        <PDFDataContext.Provider value={{ pdfData, setPDFData }}>
            {children}
        </PDFDataContext.Provider>
    );
};
