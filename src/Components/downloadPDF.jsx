import React from 'react';
import './downloadPDF.css'; // Import your CSS file

const DownloadPDF = () => {
    const pdfUrls = [
        '/image/GrowaysTechnologies.pdf',
        '/image/bangaliGrowaysTEchnologies.pdf',
        '/image/ArbiGrowaysTEchnologies.pdf',
        '/image/hindiGrowaysTEchnologies.pdf',
        '/image/kanndaGrowaysTEchnologies.pdf',
        '/image/TamilGrowaysTEchnologies.pdf',
        // Add more PDF URLs as needed
      ];


      const handleDownloadAll = () => {
        pdfUrls.forEach((pdfUrl, index) => {
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = `downloaded-file-${index + 1}.pdf`;
          link.click();
        });
      };

  return (
    <div className="download-pdf-container">
      <button className="download-pdf-button" onClick={handleDownloadAll}>
        Download All PDF
      </button>

      {/* <select name="" id="">
        <a href="h" target="_blank" rel="noopener noreferrer"></a>
        <option value="">hindi</option>
        <option value="">Tamil</option>
      </select> */}
    </div>
  );
};

export default DownloadPDF;
