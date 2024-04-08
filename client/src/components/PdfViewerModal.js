import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';

// Modal.setAppElement('#root'); // Uncomment this line if you're using React 17 or later

const PdfViewerModal = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open PDF</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
        <div style={{ width: '100%', height: '90vh' }}>
          <Document file={pdfUrl}>
            <Page pageNumber={1} width={600} />
          </Document>
        </div>
      </Modal>
    </div>
  );
};

export default PdfViewerModal;
