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

      const element = document.querySelector('.resume-container');
      if (!element || !(element instanceof HTMLElement)) {
        throw new Error('Resume container element not found');
      }

      // Pre-process badges before capture
      const badges = element.querySelectorAll('[class*="badge"]');
      const originalStyles: { [key: string]: { [key: string]: string } } = {};

      // Store original styles and apply print-specific styles
      badges.forEach((badge, index) => {
        if (badge instanceof HTMLElement) {
          // Store original styles
          originalStyles[index] = {
            position: badge.style.position,
            height: badge.style.height
          };

          // Apply print-specific styles
          Object.assign(badge.style, {
            position: 'relative',
            height: '24px'
          });

          // Handle the inner text span
          const textSpan = badge.querySelector('span');
          if (textSpan instanceof HTMLElement) {
            Object.assign(textSpan.style, {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            });
          }
        }
      });

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('.resume-container');
          if (clonedElement instanceof HTMLElement) {
            clonedElement.style.width = '794px';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '40px';
            clonedElement.style.backgroundColor = '#ffffff';
          }
        }
      });

      // Restore original styles
      badges.forEach((badge, index) => {
        if (badge instanceof HTMLElement && originalStyles[index]) {
          Object.assign(badge.style, originalStyles[index]);
        }
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF('p', 'mm', 'a4');
      let heightLeft = imgHeight;
      let position = 0;
      let pageNumber = 1;

      while (heightLeft >= 0) {
        if (pageNumber > 1) {
          pdf.addPage();
        }

        pdf.addImage(
          canvas.toDataURL('image/jpeg', 0.95),
          'JPEG',
          0,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pageHeight;
        position -= pageHeight;
        pageNumber++;
      }

      pdf.save('ian-patterson-resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={loading}
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download size={20} className={loading ? 'animate-bounce' : ''} />
      <span>{loading ? 'Generating...' : 'Download PDF'}</span>
    </button>
  );
};

export default DownloadButton;