'use client'

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    try {
      setLoading(true);

      // Target the entire content div with type assertion
      const element = document.querySelector('.resume-container');
      if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Resume container element not found');
      }

      // Configure html2canvas
      const canvas = await html2canvas(element, {
        scale: 1.5,  // Reduced scale for better file size
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clonedDoc) => {
          // Ensure proper styling in cloned document
          const clonedElement = clonedDoc.querySelector('.resume-container');
          if (!clonedElement || !(clonedElement instanceof HTMLElement)) {
            throw new Error('Failed to clone resume container');
          }

          // Apply styles to the properly typed element
          clonedElement.style.width = '794px';  // A4 width
          clonedElement.style.margin = '0';
          clonedElement.style.padding = '40px';  // Add some padding
          clonedElement.style.backgroundColor = '#ffffff';
        }
      });

      // Calculate dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Initialize PDF (measures in mm)
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      let heightLeft = imgHeight;
      let position = 0;
      let pageNumber = 1;

      // Add pages as needed
      while (heightLeft >= 0) {
        if (pageNumber > 1) {
          pdf.addPage();
        }

        pdf.addImage(
          canvas.toDataURL('image/jpeg', 0.95), // Higher quality JPEG
          'JPEG',
          0, // x
          position, // y
          imgWidth, // width
          imgHeight // height
        );

        heightLeft -= pageHeight;
        position -= pageHeight;
        pageNumber++;
      }

      pdf.save('ian-patterson-resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={loading}
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Download PDF version"
    >
      <Download size={20} className={loading ? 'animate-bounce' : ''} />
      <span>{loading ? 'Generating...' : 'Download PDF'}</span>
    </button>
  );
};

export default DownloadButton;